const express = require('express');
const app = express();
const { sequelize } = require('./database/models/index');

const routerAuth = require('./routes/AuthRouter');
const routerPost = require('./routes/PostRouter');

const PORT = process.env.PORT || 3000;
app.set('json spaces', 2);

app.use(express.json());
app.use(express.urlencoded({ extended: 'false' }));

app.get('/', (req, res) => {
    res.status(200).json({ ok: 'Hola!' });
});

app.use(routerAuth);
app.use(routerPost);


app.listen(PORT, async() => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);

    try {
        await sequelize.authenticate();
        console.log('Conectado!');
    } catch (err) {
        console.error('Error en la conexion: ', err);
    }
});

module.exports = app;