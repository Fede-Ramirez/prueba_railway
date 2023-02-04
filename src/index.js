const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicación');
});

app.get('/home', (req, res) => {
    res.send('Estoy deployado en Railway!');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
