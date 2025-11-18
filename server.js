const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Backend funcionando en Render'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Servidor funcionando en puerto ' + port));