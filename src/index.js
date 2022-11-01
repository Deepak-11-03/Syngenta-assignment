const express = require('express')
const route =  require('./routes/route')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app =express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://testing:TXPxQZxsp8BSnQb9@cluster0.jhebhrt.mongodb.net/assignment")
.then(() => {
    console.log("MongoDb connected")
}).catch((err) => {
    console.log(err.message)
});

app.use('/' , route);

app.listen( 3000 ,function(){
    console.log('App running on port ' +  3000)
});