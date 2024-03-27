#!/home/grena/University/WP-Labs/Websockets/venv/bin/python

import sys
import socket
from bs4 import BeautifulSoup

def make_request(url):
    try:
        url_parts = url.split("/")
        host = url_parts[2]
        path = "/" + "/".join(url_parts[3:])
        
        if not path:
            path = "/"

        request = f"GET {path} HTTP/1.1\r\nHost: {host}\r\n\r\n"

        # Create a TCP socket
        client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        client.connect((host, 80))
        client.sendall(request.encode("utf-8"))
        

        response = b""
        while True:
            chunk = client.recv(8192)
            if not chunk:
                break
            response += chunk
            if b'\r\n\r\n' in response:
                break
            
        client.close()    

        return BeautifulSoup(response, 'html.parser').get_text()
    except client.error as e:
        print("Error making request:", e)
        sys.exit(1)

def print_response(response):
    print(response)  

def search(search_term):
    search_url = f"https://www.google.com/search?q={search_term}"
    response = make_request(search_url)
    soup = BeautifulSoup(response, 'html.parser')
    links = soup.find_all('a')
    count = 0
    for link in links:
        href = link.get('href')
        if href.startswith('/url?q='):
            count += 1
            print(link.get('href')[7:])
            if count == 10:
                break

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
        print_response(response)
    
    elif sys.argv[1] == "-s":
        if len(sys.argv) != 3:
            print("Usage: go2web -s <search-term>")
            sys.exit(1)
        search_term = sys.argv[2]
        search(search_term)
    
    else:
        print("Invalid option. Use -h for help.")

if __name__ == "__main__":
    main()