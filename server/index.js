const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express() //INSTANCIAMOS LA FUNCIÓN
const Result = require('./models')
const url = 'mongodb+srv://maxi:na2so4@cluster0-oxdph.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url,{useNewUrlParser: true}, (error)=> {
    if(error){
        console.log(error)
    }else{
        console.log('base de datos conectada')
    }
})


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/getresult/:firstValue/:secondValue/sum', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let resultado = firstValue + secondValue
    const newResult = new Result ({value : resultado })
    newResult.save((error, Result)=>{
        if(errror){
            console.log(error)
        }else{
            console.log(result)
        }
    })
    res.send({result : resultado})
})
app.get('/getresult/:firstValue/:secondValue/rest', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let resultado = firstValue - secondValue
    const newResult = new Result ({value : resultado })
    newResult.save((error, result)=>{
        if(errror){
            console.log(error)
        }else{
            console.log(result)
        }
    })
    res.send({result : resultado})
})
app.get('/getresult/:firstValue/:secondValue/mult', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let resultado = firstValue * secondValue
    const newResult = new Result ({value : resultado })
    newResult.save((error, result)=>{
        if(errror){
            console.log(error)
        }else{
            console.log(result)
        }
    })
    res.send({result : resultado})
})
app.get('/getresult/:firstValue/:secondValue/div', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let resultado = firstValue / secondValue
    const newResult = new Result ({value : resultado })
    newResult.save((error, result)=>{
        if(errror){
            console.log(error)
        }else{
            console.log(result)
        }
    })
    res.send({result : resultado})
})
 
app.listen(3000, () => {
    console.log("server corriendo en puerto 30000")
})