const express= require('express');
const bodyParser=require('body-parser');
const feedRoutes=require('./routes/feed');
const mongoose=require('mongoose');
const app=express();
const PORT=8080;


app.use(bodyParser.json()); // to handle json request

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
});
app.use('/feed',feedRoutes);


mongoose.connect('mongodb+srv://ritesh:<password>@cluster0.brnspxa.mongodb.net/?retryWrites=true&w=majority').then( result=>{   app.listen(PORT,()=>{
    console.log('listening at port'+PORT);
})}
 

).catch(err=>{
    console.log(err);})
