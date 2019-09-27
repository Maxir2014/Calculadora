const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express() //INSTANCIAMOS LA FUNCIÓN
 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.get('/getresult/:firstValue/:secondValue/sum', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let result = firstValue + secondValue
    console.log('+' + result)
    res.send({result : result})
})
app.get('/getresult/:firstValue/:secondValue/rest', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let result = firstValue - secondValue
    console.log('-' + result)
    res.send({result : result})
})
app.get('/getresult/:firstValue/:secondValue/mult', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let result = firstValue * secondValue
    console.log('*' + result)
    res.send({result : result})
})
app.get('/getresult/:firstValue/:secondValue/div', function (req, res) {      //
    const firstValue = parseFloat(req.params.firstValue)
    const secondValue = parseFloat(req.params.secondValue)
    let result = firstValue / secondValue
    console.log('/' + result)
    res.send({result : result})
})
 
app.listen(3000, () => {
    console.log("server corriendo en puerto 30000")
})