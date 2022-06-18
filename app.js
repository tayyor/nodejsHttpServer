// creating http module
const http = require('http');
const port = 3040; // for listening to requests
const url = require('url') // for routing
const fs = require('fs'); // for reading files

// creating webserver
const server = http.createServer((req,res)=>{
    const path = req.url
    if(path ==='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('index.html',(error,data)=>{
            if(error){
                res.writeHead(404);
                res.write('Error: file not found');
            }else{
                res.write(data);
            }
            res.end();
        })
    }else if(path ==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('about.html',(error,data)=>{
            if(error){
                res.writeHead(404);
                res.write('Error: file not found');
            }else{
                res.write(data);
            }
            res.end();
        })
    }else if(path ==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('contact.html',(error,data)=>{
            if(error){
                res.writeHead(404);
                res.write('Error: file not found');
            }else{
                res.write(data);
            }
            res.end();
        })
    }else if(path === '/home'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.readFile('index.html',(error,data)=>{
            if(error){
                res.writeHead(404);
                res.write('Error: file not found');
            }else{
                res.write(data);
            }
            res.end();
        })
    }
})

//creating a listner to the server

server.listen(port, (error)=>{
    if(error){
        console.log(`something went wrong, ${port}`);
    }else{
        console.log(`server is listening on port ${port}....`);
    }
})

