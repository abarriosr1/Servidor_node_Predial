const express = require('express')
/*require('dotenv').config()*/

const multer = require('multer')
const upload=multer({dest: 'uploads/'})

const app=express()

app.use(express.json())

app.get('/', function(req, res){
    res.send('Hello')
})

app.post('/imagen', upload.single('imagen'),function (req, res){
    const body=req.body
    const imagen=req.file
    console.log(imagen)
    /*console.log(body)*/
    res.send('PRUEBA DESDE EL POST')
})

app.listen(3000)


/*
app.get('/',(req, res) =>{
    console.log('Petición recibida')
    res.status(200).send('<h1>Hola Mundo</h1>')
})

const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log('servidor escuchando en el puerto ${PORT}')
})
*/


