const express = require('express');
const app=express();
const dotEnv=require('dotenv')
const mongoose=require ('mongoose')

dotEnv.config()

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/',(req,res)=>{
    console.log('Hey')
})

app.listen('5000',()=>{
    console.log('Backend is running')
});