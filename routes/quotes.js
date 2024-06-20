const express = require("express")

const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Quotes")
})

router.get('/tim-gunn', (req, res) => {
    res.send('Make it work')
})


router.get('/bruno', (req,res) => {
    res.send("Throw a grenade for you")
})

router.get('/donald-trump', (req,res) => {
    res.send("I blame China")
})

router.get('/jeff', (req,res) => {
    res.send("my name jeff")
})

router.get("/meeper", (req , res) => {
    res.send('meep moop beep boop')
})

router.get("/william-shakespreare", (req, res) => {
    res.send("All that glitters is not gold")
})

router.get("/woody-allen", (req, res) => {
    res.send("Eigthy percent of success is showing up")
})

router.get("/rudy-kipling", (req, res) => {
    res.send("He travels the fastest travels alone")
})


module.exports=router                                                                            
