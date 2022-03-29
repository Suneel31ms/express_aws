const express = require('express')
const dotenv = require("dotenv")
const app = express();
dotenv.config()
const port = process.env.PORT || 5500;

 app.get('/',(req, res) =>{
     res.send("Hello Express_Severis Working ")
 })


app.listen(port,()=>{
    console.log(`port --- http://localhost:${port}`);
})