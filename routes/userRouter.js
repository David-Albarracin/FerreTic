const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/', userController.registrarUsuario);
router.post('/', userController.loginUsuario);
router.get('/', userController.public);
router.get('/', userController.private);
router.get('/', userController.virificaToken, (req, res)=>{
    res.send(req.userId);
});

module.exports = router;

//metodo tutorias
/*const express = require('express');
let userController = require('../controllers/UserController')

let user = express.Router();

user.post('/', userController.login);

module.exports = user;*/