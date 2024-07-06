const express = require('express')
require('dotenv').config()

const app=express()

app.get('/',(req, res) =>{
    console.log('Petición recibida')
    res.status(200).useChunkedEncodingByDefault('<h1>Hola Mundo</h1>')
})

const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log('servidor escuchando en el puerto ${PORT}')
})
