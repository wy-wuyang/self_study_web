import express from 'express';

const app = express();
import {DataStore} from "./data/data"

console.log(DataStore.post);


app.get("/todo",(req,res,next)=>{
    res.json(DataStore.todo)
})

app.listen(process.env.PORT || 8888 , () => {
    console.log("Server start...");
    
})
