const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("TaskFlow", "root", "1234",{
    host: "localhost",
    dialect: "mysql"
})

try {
    sequelize.authenticate()
    console.log('Banco de dados conectado!')
} catch (err){
    console.log('Erro na conexão com o banco: '+err)    
}

module.exports = sequelize