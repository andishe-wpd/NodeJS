const { response } = require("express")
const express = require("express")

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>admin page</h1>')
})
router.get('/add-product',(req,res)=>{
    res.send('<form action="add-product-result" method="POST"><input type:"text" name:"title" /><button type:"submit" >add product title</button></form>')
})
router.post('/add-product-result',(req,response)=>{
    response.redirect('/')
    // res.send('<h1>adminresult page</h1>')
})


module.exports = router