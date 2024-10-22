const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup",async(req, res)=>{
console.log(req.body);
res.json(["Dummy Data Response"]);
});

app.listen(2222,()=>{
    console.log("Listening to Port 2222");
});

let connectToMDB = async()=>{

  try {
    mongoose.connect("mongodb+srv://chethankoduri:chethan@chethan.ifthz.mongodb.net/?retryWrites=true&w=majority&appName=chethan");
    console.log("sucessfully connected to MDB");
  } catch (error) {
    console.log("Unable to connect to MDB");
  }
};

connectToMDB();