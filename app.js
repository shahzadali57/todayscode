const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./schema");
const cors = require("cors");
const port = 2000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://login:login@cluster0.fovfn.mongodb.net/signup",
{
    useNewUrlParser: true,
    useUnifiedTopology:true
}
)


mongoose.connection.on("connected",()=>console.log("mongoose connected successfuly"));
mongoose.connection.on("error",()=>console.log("mongoose not connected"));



app.post("/create", (request,response) =>{
    try {
        const body = request.body;
        postModel.create(body, (error,data)=>{
            if(error){
                throw error
            }else{
                response.send(data)
            }
        })
        
    } catch (error) {
        response.send(error.message)
    }
} )



app.listen(port, ()  =>console.log(`your server is running on localhost:${port}`));