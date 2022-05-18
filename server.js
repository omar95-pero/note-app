const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const router = require('./route/noteRoute');
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/pero',(req,res)=>{
    res.end('success');
})
app.use("/api/v1",router)
app.listen(3000,()=>{
    console.log('server work successfully');
})