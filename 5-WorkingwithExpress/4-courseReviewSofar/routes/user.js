const express = require("express")

const router = express.Router()

router.get('/user',(req,res)=>{
    res.send('<h1>user page</h1>')
})


module.exports = router