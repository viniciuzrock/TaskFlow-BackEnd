const User = require('../models/User')
// const bcrypt --importar dps
const { where } = require('sequelize')

module.exports = class AuthControllers {
    
    static getUserLogin(req,res){
        console.log('CHAMOU');
        return res.json({
        user:'admin@admin',
        password:'abc1234'
        })
    }

    static async registerUser(req){
        console.log('BATEU')
        const data = await req
        console.log(data)
        return data
    }
}