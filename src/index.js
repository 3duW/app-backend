//importacion de paquetes
const express = require("express")

//definicion de configuraciones 
const aplicacion = express()

//ejecucion req(significa peticion) y res (respuestas que nosotros daremos )
aplicacion.get("/prueba/express", function(req,res) {
    res.send("hola,estas en la wed de prueba asdafasxc")
})

aplicacion.listen(4000)