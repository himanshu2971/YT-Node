const http=require('http') //This line imports the built-in http module in Node.js, which provides functionality for creating HTTP servers and making HTTP requests.
const server=http.createServer((req,res)=>{
    console.log('Request Event')
    res.end('hello World')
})
//server.listen(5000, () => { ... }): This line tells the server to start listening on port 5000 for incoming HTTP requests. 
//The listen method takes two parameters: the port number to listen on (5000 in this case), and a callback function that gets executed once the server starts listening. 
//In this example, it logs the string 'Server listening to port 5000' to the console.
server.listen(5000, ()=>{
    console.log('Server listening to port 5000')
})
