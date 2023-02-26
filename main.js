
var express = require('express')
var app = express()
const fs = require('fs');
var port = 3000

//Request Parser 
app.use(express.static("public")); //A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.get('/getData',(req,res)=>{
    fs.readFile('./data.json','utf-8',(err, data)=>{
        if(err){
            res.end("error occured");
        }
        else {
          res.end(data);
        }
    })
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost${port}`);
})