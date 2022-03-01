const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require('./routes/adminRoutes')
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT)||3001;

app.use(cors());
app.use(express.json());

//connect
mongoose.connect(
    "mongodb+srv://rishika:dbms@cluster0.cdsmk.mongodb.net/gymnasium?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "gymnasium" },
    (err) => {
      if (err) {
        console.log("Failed");
      } else console.log("Success");
    }
  );


  app.get("/", (req, res) => {
    res.send("Hey there!");
  });
app.use("/",router);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Contorl-Allow-Methods', 'Content-Type', 'Authorization');
  next();
})

  app.listen(PORT, function () {
    console.log("Server is listening");
  });