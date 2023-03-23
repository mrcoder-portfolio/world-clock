const express = require("express")
const app = express()
const port = 8080
const path = require('path')


app.get('/' , (req , res)=>{
    // res.send("hello world!")
    res.sendFile(path.join(__dirname , 'templates/index.html'))
})

app.listen(port , ()=>{
    console.log(`listing on port ${port}`)
})

