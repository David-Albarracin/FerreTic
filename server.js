//Install express server
const express = require('express');
const conectarDB = require('./config/db');


const path = require('path');
const cors = require("cors");

const app = express();

const mainRoutes = ('/api/productos', require('./routes/producto'));
const mainRoutess = ('/api/user', require('./routes/userRouter'));

app.use(mainRoutes, mainRoutess)

//console.log(process.env.DB_MONGO);

//dbmongo
conectarDB();
app.use(cors());
app.use(express.json());
//app.use('/api/productos', require('./routes/producto'), '/api/user', require('./routes/userRouter'));
//app.use('/api/user', require('./routes/userRouter'));

// Serve only the static files form the dist directory
app.use(express.static('./dist/FerreTic'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/FerreTic/'}),
);

app.listen(process.env.PORT || 8080);

/*
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;


// Start the app by listening on the default Heroku port
app.listen(port, host, () => {
    console.console.log('El servidor esta funcionando');
});*/