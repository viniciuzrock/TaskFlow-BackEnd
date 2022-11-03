const conexaodb = require("./db/conexao")
const User = require("./models/User")//Cria a tabela Users
const authRoutes = require("./routes/authRoutes")
const cors = require("cors")
const axios = require("axios")
const express = require("express")
const port = 5000
const app = express()

app.use(cors())
app.use('/',authRoutes)


conexaodb.sync({
    // force:true
}).then(()=>{
    app.listen(port, ()=>{
        console.log('Servidor online na porta: '+port)
    })
}).catch((e)=>{
    console.log('Erro na conexão com o servidor: '+e);
})
