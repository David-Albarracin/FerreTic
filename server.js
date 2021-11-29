//Install express server
const express = require('express');
const path = require('path');

const app = express();


//dbmongo
conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api/productos', require('./routes/producto'));

// Serve only the static files form the dist directory
app.use(express.static('./dist/FerreTic'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/FerreTic/'}),
);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;


// Start the app by listening on the default Heroku port
app.listen(port, host, () => {
    console.console.log('El servidor esta funcionando');
});