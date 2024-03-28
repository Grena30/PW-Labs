#!/home/grena/University/WP-Labs/Websockets/venv/bin/python

import sys
import socket
from bs4 import BeautifulSoup
import ssl
import warnings

PORT = 80
RECV_SIZE = 4096

warnings.filterwarnings('ignore', category=DeprecationWarning)

def make_request(url):
    try:
        url_parts = url.split("/")
        host = url_parts[2]
        path = "/" + "/".join(url_parts[3:])
        
        if not path:
            path = "/"

        client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client.connect((host, PORT))
        request = f"GET {path} HTTP/1.1\r\nHost:{host}\r\nConnection: close\r\n\r\n"

        client.sendall(request.encode("utf-8"))
        
        response = b""
        while True:
            chunk = client.recv(RECV_SIZE)
            if not chunk:
                break
            response += chunk
            
        client.close()    

        soup =  BeautifulSoup(response, 'html.parser')
    
        if soup.decode().startswith("HTTP/1.1 301") or soup.decode().startswith("HTTP/1.1 302") or soup.decode().startswith("HTTP/1.1 303") or soup.decode().startswith("HTTP/1.1 307") or soup.decode().startswith("HTTP/1.1 308"):

            print("Redirecting...\n")
            client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            ssl_socket = ssl.wrap_socket(client_socket, ssl_version=ssl.PROTOCOL_TLS)
            ssl_socket.connect((host, 443))
            ssl_socket.sendall(request.encode("utf-8"))

            response = b''
            while True:
                data = ssl_socket.recv(1024)
                if not data:
                    break
                response += data


            ssl_socket.close()
        
        return response
    
    except socket.error as e:
        print("Error making request:", e)
        sys.exit(1)

def print_url_response(response):
    soup = BeautifulSoup(response, 'html.parser')
    print(soup.get_text())

def print_search_results(response):
    soup = BeautifulSoup(response, 'html.parser')
    print(soup.get_text())
    
def main():
    if len(sys.argv) == 1 or sys.argv[1] == "-h":
        print("Usage:")
        print("go2web -u <URL>         # make an HTTP request to the specified URL and print the response")
        print("go2web -s <search-term> # make an HTTP request to search the term using your favorite search engine and print top 10 results")
        print("go2web -h               # show this help")
        sys.exit(0)
    
    if sys.argv[1] == "-u":
        if len(sys.argv) != 3:
            print("Usage: go2web -u <URL>")
            sys.exit(1)
        url = sys.argv[2]
        response = make_request(url)
        print_url_response(response)
    
    elif sys.argv[1] == "-s":
        if len(sys.argv) != 3:
            print("Usage: go2web -s <search-term>")
            sys.exit(1)
        search_term = sys.argv[2]
        search_term = search_term.replace(" ", "+")
        results = make_request("https://www.google.com/search?q=" + search_term)
        print_search_results(results)
        
    else:
        print("Invalid option. Use -h for help.")

if __name__ == "__main__":
    main()