const express=require("express");
const app=express();

app.use(express.json());
const students=[{
    "id": 1,
    "first_name": "Christoph",
    "last_name": "Bedbrough",
    "email": "cbedbrough0@wikia.com"
  }, {
    "id": 2,
    "first_name": "Thibaut",
    "last_name": "Dubs",
    "email": "tdubs1@hud.gov"
  }, {
    "id": 3,
    "first_name": "Arden",
    "last_name": "Di Claudio",
    "email": "adiclaudio2@google.cn"
  }, {
    "id": 4,
    "first_name": "Kellyann",
    "last_name": "Scoggin",
    "email": "kscoggin3@msu.edu"
  }, {
    "id": 5,
    "first_name": "Whitby",
    "last_name": "Spadari",
    "email": "wspadari4@php.net"
  }, {
    "id": 6,
    "first_name": "Joice",
    "last_name": "Lightbody",
    "email": "jlightbody5@ft.com"
  }, {
    "id": 7,
    "first_name": "Enoch",
    "last_name": "Rubenczyk",
    "email": "erubenczyk6@parallels.com"
  }, {
    "id": 8,
    "first_name": "Winifield",
    "last_name": "Guillard",
    "email": "wguillard7@squarespace.com"
  }, {
    "id": 9,
    "first_name": "Dominik",
    "last_name": "Bengochea",
    "email": "dbengochea8@instagram.com"
  }, {
    "id": 10,
    "first_name": "Zondra",
    "last_name": "Ravenscroft",
    "email": "zravenscroft9@apache.org"
  }]

// app.use(express.json());
app.get('/',(req,res)=>{
res.send("welcome.....")
});

app.get('/api/students',(req,res)=>{
res.json(students)
});

app.post('/api/students',(req,res)=>{
    // console.log(req.body)
    if(!req.body.email){
        res.status(400)
        return res.send("email is required")
    }
    if(!req.body.first_name||req.body.first_name.length<4){
        res.status(400)
        return res.send("name is required and should be minimum 4 characters long.")
    }
    if(!req.body.last_name||req.body.last_name.length<3){
        res.status(400)
        return res.send("name is required and should be minimum 3 characters long.")
    }
const user={
        id:students.length +1,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
            };

    students.push(user);
res.json(user);
    // res.send("students post request")
    });



app.put('/api/students/:id',(req,res)=>{
    const id=req.params.id;
    let first_name=req.body.first_name
    let last_name=req.body.last_name
    let email=req.body.email

let index=students.findIndex((student)=>{
        return(student.id==Number.parseInt(id))

});
// console.log(id, req.body, index)

  if(index>=0){
      const std=students[index]
      std.last_name=last_name
      std.first_name=first_name
      std.email=email
      res.json(std)
  }else{
      res.status(404)
      
  }// console.log(id);
    // res.json(id);
});



app.delete('/api/students/:id',(req,res)=>{
let id=req.params.id;
let index=students.findIndex((student)=>{
    return(student.id==Number.parseInt(id))
});

if(index>=0){
    let std=students[index];
    students.splice(index,1);
        res.json(std);
}else{
    res.status(404);
};

});


























app.listen(3000,()=>console.log('listening to port 3000....'))