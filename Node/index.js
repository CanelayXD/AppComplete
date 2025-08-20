const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const questionRoutes = require('./routes/questionRoutes');

// Importar Rutas

const usersRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('Acción realizada correctamente'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(passport.initialize()); 
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

// Llamado de las rutas

usersRoutes(app);
app.use(questionRoutes);

server.listen(3000, '192.168.0.14' || 'localhost', function() {
    console.log('Aplicacion Amodrinks ' + port + ' Iniciada...')
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/TEST', (req, res) => {
    res.send('Alguien ayúdeme');
});

//Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});