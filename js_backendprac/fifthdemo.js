/*                       HTTP Request                    Backend app
                     POST   To Create              |   
                     GET     To Read               |             API         
                     PUT      To Update            |   HTTP 
                     DELETE   TO Delete            | Server     route

CLIENT-SIDE APP ------------------------------->   |            route
                <--------------------------------- |                        Database
                                                   |            route
                                                   |
                                                   |
                                                   |
                                                   | 
Our computer is maintained by three application browser server  and http server and database server             
The role of client side app requesting the backend{TO MAKE THE REQUEST }
Backend role is to perform request which we get the client side
backend can have n number of apis 
web server ---> where the backend is running 
HTTP{hyper text transfer protocol} protocol----> between client and server they can talk to together
HTTP Request --> from client side
HTTP Response --> from backend app/ server 
how many request frontend made that much of response will get from server 
{type of requests are: post, get,put,delete}
post,get,put,delete---> CRUD OPERATIONS     total operatios are 11, these 4 are the more imp
HTTP server is the only one --> it receives the request from client
address of the server is http://domain:port/url-path    [endpoint] --> with this end point= baseaddress+urlpath
to process the request API is required 
---> after port     /url-path---> is used to identify forward the req to specific route
----> final destination is for request from the server is API route.
---> API route can talk directly database
------> no client side  can talk directly to database. */


/* Node js
upto 2010 i fwe have any js code to run we run in browsers {javascript engine}
{ Most efficient engine is v8 by google}
 node js --> after 2010---> another runtime is created it helps the js file outside the browser 
 node js is a javascript  runtime + huge library  than other languages--->they used the same v8 engine to built node js
Javascript file can be run in two ways
--> { using node js runtime{ js engine+nodejs. apis}}   after 2010  
---> {browser {jsengine+web apis }}     before 2010
{ node js contains the world largest library}
 npm---> node package manager

// to install any module from node.js
npm install module-name  { to install particular module}



/* TO BUILD THE BACKEND 
---> WE HAVE 2.5 MILLION MODULES IN JS THAT ONE MODULE IS NAMED AS EXPRESS
by express module we can build http server and apis */


/* Steps to create backend


1) ---> Generate package.json file ---> which conatians the complete info about the project
     npm init-y{ command to create the json file}
     after creating the json file you have to change the in json file type as module main as server.js 

2) TO Create the http server
  ---> install and import  express module
        npm install express
----->import express module   
  */


 




                               