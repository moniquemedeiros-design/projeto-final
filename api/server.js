const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const bibliotecaRoutes = require('./routes/bibliotecaRoutes');

app.use(cors());
app.use(express.json());

app.use('/biblioteca', bibliotecaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});