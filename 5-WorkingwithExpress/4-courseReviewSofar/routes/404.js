const express = require("express")

const router = express.Router()

router.use('/',(req,res)=>{
    res.send('<h1>404 page</h1>')
})


module.exports = router