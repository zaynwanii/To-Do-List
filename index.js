import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


let activity=[];
app.get('/',(req,res)=>{
    const day=new Date();
    const options={  day: "numeric",weekday: "long" };;
    let today=day.toLocaleDateString('us-en',options); 
    res.render('index.ejs',{
        today:today,
        activity:activity
    });
});

app.post('/',(req,res)=>{
    var task=req.body['task'];
    activity.push(task);
    res.redirect('/');
});
app.listen(port,()=>{
    console.log("Server started on port: "+port);
})