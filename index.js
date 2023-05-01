const express = require("express");
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;

const allChefsData = require('./data/chefs.json');

app.use(cors());

app.get('/' , (req , res) => {
    res.send('Server is running');
})

app.get('/allchefsdata' , (req , res) =>{
    res.send(allChefsData);
})

app.listen(port , ()=>{
    console.log(`server is running on port:${port}`)
})