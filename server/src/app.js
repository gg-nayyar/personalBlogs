const express = require('express');
const path = require('path');
const api = require("./api.js");
const cors = require('cors')

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use('/',api);
// app.use(express.static(path.join(__dirname,'..','..','client',"out")))

// app.use((req,res)=>{
//     console.log(req.url);
//     res.sendFile(path.join(__dirname,'..','..','client',"out","index.html"));
// })

module.exports = app;