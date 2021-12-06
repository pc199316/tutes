// const http = require('http');

// //create a server object:
// // http.createServer(function (req, res) {
// //   res.write('Hello World!'); //write a response to the client
// //   res.end(); //end the response
// // }).listen(8080); //the server object listens on port 8080


// const sever = http.createServer((req,res)=>{
// res.end("hello from th other side");


// });
// sever.listen(8000,"127.0.0.1",()=>{console.log("listning to the port number 8000");
// });




// const express= require("express");
// let app = express();


// app.get('/', function(req,res){
//   res.send("hello world");
// });

// app.listen(3000);




// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// })


// const express = require('express')
// // const path = require('path')
// const app = express()
// // const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/aboutUs', (req, res) => {
//   res.send('about')
// res.sendFile(path.join(__dirname,'index.html'))

// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// const express = require('express')
// const bodyparser = require('body-parser')
// const app = express()
// const port = 3000

// app.use(express.json())

// app.get('/', function (req, res) {
  // res.send('Hello World!')

  //console.log(req);
// res.send(req.query)

// })
//Respond to POST request on the root route (/), the application’s home page:

// app.post('/', function (req, res) {
  // let users={
  //   "firstName": "Rack",
  //   "lastName": "Jackon",
  //   "gender": "man",
  //   "age": 24,
  //   "address": "streetAddres126",
        
  //   }
  // res.use(req.body.users);
 
    
  // res.json([{
  //   "firstName": "Rack",
  //   "lastName": "Jackon",
  //   "gender": "man",
  //   "age": 24,
  //   "address": "streetAddres126",
        
  //   }])
  //   console.log(req.body);
  
  // })
//Respond to a PUT request to the /user route:

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// })
//Respond to a DELETE request to the /user route:

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// })
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//   })


//   const express = require('express')
//   const path = require('path')
// const app = express()
// const port = 3000

//app.use(express.static(path.join(__dirname,"public")))

// app.get('/', function (req, res) {
  //res.send('Hello World!')
  // res.sendFile(path.join(__dirname,'index.html'))
   // res.json({"firstname":"priyanka",
             // "lastname":"choudhary","age":27,"learning":"javaScript"})



// })
//Respond to POST request on the root route (/), the application’s home page:

// app.post('/', function (req, res) {
  // res.send('Got a POST request')
// })
//Respond to a PUT request to the /user route:

// app.put('/user', function (req, res) {
  // res.send('Got a PUT request at /user')
// })
//Respond to a DELETE request to the /user route:

// app.delete('/user', function (req, res) {
  // res.send('Got a DELETE request at /user')
// })
// app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`)
  // })


// var currTime=new Date();
//   console.log(currTime);


const express=require("express");
const app=express();
//const bodyparser=require("body-parser");

// const port=3000;



app.get('/',(res,req)=>{

res.send('hello world!');
});

// app.get('/page2',(res,req)=>{
//     res.send('this is about us page.');

// });

// app.get('/page2/linkto.2',(res,req)=>{
// res.send({firstname:"priyanka",
//           lastname:"choudhary"

// })

// })



app.listen(3000,()=>console.log("listeing to port 3000..."))











