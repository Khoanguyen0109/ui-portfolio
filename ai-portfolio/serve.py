import http.server
import os

os.chdir("/Users/cuncubby/ai-portfolio")

handler = http.server.SimpleHTTPRequestHandler
server = http.server.HTTPServer(("", 3000), handler)
print("Serving portfolio at http://localhost:3000")
server.serve_forever()
