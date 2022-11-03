const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")

router.get('/user', authController.getUserLogin)
router.post('/users', authController.registerUser)
    //já separamos o campo 'data' da resposta do axios
    // const {data} = await axios('link_api')//conexao com o axios

module.exports = router