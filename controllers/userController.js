const user = require("../models/User");
const jwt = require('../node_modules/jsonwebtoken/index');

// create one-> POST

/*await newUser.save(function (err) {
        if (!err) {
            console.log('User Created');
        } else {
            console.log('ERROR: ' + err);
        }
    });
    res.json(newUser)*/

// create one-> POST JWT

exports.registrarUsuario = async function (req, res) {

    var newUser = new user({
        username: req.body.username,
        password: req.body.password
    });

    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, 'secretkey')
    res.status(200).json({ token })

}

exports.loginUsuario = async function (req, res) {

    const { username, password } = req.body;
    const User = await user.findOne({ username })

    if (!User) return res.status(401).send("Usuario no existe");
    if (User.password !== password) return res.status(401).send("Contraseña incorrecta");

    const token = jwt.sign({ _id: User._id }, 'secretkey');
    res.status(200).json({ token });
}

exports.public = function (req, res){
    res.json([
        {
            _id:1,
            nombre: 'productos',
            descripcion: 'ver productos',
            date: '2021-12-07T23:50:37.327+00:00'
        },
        {
            _id:2,
            nombre: 'productos',
            descripcion: 'ver productos',
            date: '2021-12-07T23:50:37.327+00:00'
        }
    ])
}

exports.private = function (req, res){
    if(!req.headers.authorization){
        return res.status(401).send('No está autorizado');
    }

    const token = req.headers.authorization.split(' ')[1]
    

    if (token === 'null'){
        return res.status(401).send('No está autorizado');
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id;    
    res.json([
        {
            _id:1,
            nombre: 'productos',
            descripcion: 'ver productos',
            date: '2021-12-07T23:50:37.327+00:00'
        },
        {
            _id:2,
            nombre: 'productos',
            descripcion: 'ver productos',
            date: '2021-12-07T23:50:37.327+00:00'
        }
    ])
}

exports.virificaToken = function (req, res, next){
    console.log(req.headers.authorization);
    if(!req.headers.authorization){
        return res.status(401).send('No está autorizado');
    }

    const token = req.headers.authorization.split(' ')[1]
    

    if (token === 'null'){
        return res.status(401).send('No está autorizado');
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id;
    next();
}