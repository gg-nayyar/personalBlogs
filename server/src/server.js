const http = require( 'http');
const mongoose = require( 'mongoose');
const app = require("./app.js");
const dot_env = require("dotenv");

dot_env.config();
const MONGO_URL = process.env.MONGO_DB_URI ;

const server = http.createServer(app);

const PORT = 8000;
async function startServer(){
    mongoose.connection.once('open', ()=>{
        console.log('MongoDB is Connected');
    })
    mongoose.connection.on('error',(err)=>{
        console.error(err);
    })
    try{
        await mongoose.connect(MONGO_URL)
        server.listen(PORT,()=>{
            console.log(`Server is running on ${PORT}`)
        })
    }
    catch(err){
        console.error(err);
    }
}

startServer();