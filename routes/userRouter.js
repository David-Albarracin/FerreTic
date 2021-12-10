const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/registro', userController.registrarUsuario);
router.post('/login', userController.loginUsuario);
router.get('/public', userController.public);
router.get('/private', userController.private);
router.get('/profile', userController.virificaToken, (req, res)=>{
    res.send(req.userId);
});

module.exports = router;

//metodo tutorias
/*const express = require('express');
let userController = require('../controllers/UserController')

let user = express.Router();

user.post('/', userController.login);

module.exports = user;*/