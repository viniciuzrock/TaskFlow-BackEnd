const conexaodb = require("./db/conexao")
// const User = require("./models/User")//Cria a tabela Users
const cors = require("cors")
const axios = require("axios")
const express = require("express")
const port = 5000
const app = express()

app.use(cors())
app.get("/user",(req, res)=>{
    //já separamos o campo 'data' da resposta do axios
    // const {data} = await axios('link_api')//conexao com o axios
    const array = [
        {
            user:'admin',
            password:1234
        }
    ]
    console.log('CHAMOU');
    return res.json({
        user:'admin',
        password:1234
    })
})

conexaodb.sync({
    // force:true
}).then(()=>{
    app.listen(port, ()=>{
        console.log('Servidor online na porta: '+port)
    })
}).catch((e)=>{
    console.log('Erro na conexão com o servidor: '+e);
})
