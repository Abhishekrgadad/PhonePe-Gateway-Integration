const express = require('express');
const cors = require('cors')
const crypto = require('crypto')
const axios = require('axios')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let salt_key = "  "
let merchant_id = '' 

app.get('/', (req,res)=>{
    res.send("Server route is working");
})


app.listen(8000, ()=> {
    console.log("Server is running in port 8000");
})