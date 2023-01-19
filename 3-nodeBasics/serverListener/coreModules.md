- fs:       access file system and edit them
- http :    launch a server, send requests
- https:    launch a SSL server
- os:       
- path




### http:
to create a server and send an api request 
1- import http with require syntax
2- create a server const  => const server = http.createServer((req,res)=> do something with req and res)
3- server.listen(port) => eg. 3000 => localhost:3000