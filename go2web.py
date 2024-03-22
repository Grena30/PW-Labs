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

        with socket.create_connection((host, 80)) as sock:
            sock.sendall(request.encode())

            response = b""
            while True:
                chunk = sock.recv(4096)
                if not chunk:
                    break
                response += chunk
                
                if b"\r\n\r\n" in response:
                    break
                
            return BeautifulSoup(response.decode("utf-8"), "html.parser").get_text()
    except socket.error as e:
        print("Error making request:", e)
        sys.exit(1)

def print_response(response):
    header, _, body = response.partition("\r\n\r\n")
    print(body)

def search(search_term):
    search_url = f"https://www.google.com/search?q={search_term}&num=10&hl=en&lr=lang_en"
    print("Searching url: ", search_url)
    response = make_request(search_url)
    print_response(response)

def help():
    print("Usage:")
    print("go2web -u <URL>         # make an HTTP request to the specified URL and print the response")
    print("go2web -s <search-term> # make an HTTP request to search the term using your favorite search engine and print top 10 results")
    print("go2web -h               # show this help")

def main():
    if len(sys.argv) == 1 or sys.argv[1] == "-h":
        help()
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
