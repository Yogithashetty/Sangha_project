const express = require("express");
const monogooes = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
monogooes.connect("mongodb+srv://vtech2025b1:I34ZlC4julSjebsU@vtech2025b1.disrm.mongodb.net/sgpu2025?retryWrites=true&w=majority&appName=vtech2025b1");

const app=express();
app.use(bodyparser.json());
app.use(cors());




app.listen(3000,()=>
{
    console.log("Server is running on Port 3000");
})