const express = require("express")

const router = express.Router()

router.use('/',(req,res)=>{
    res.status(404).send('<h1>404 page</h1>')
})


module.exports = router