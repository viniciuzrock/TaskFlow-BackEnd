const { DataTypes } = require("sequelize")
const conexaodb = require("../db/conexao")

const User = conexaodb.define('User',{
    Nome: {
        type: DataTypes.STRING,
        require: true,
    },
    Email: {
        type: DataTypes.STRING,
        require: true
    },
    Senha: {
        type: DataTypes.STRING,
        require: true
    }
})

module.exports = User