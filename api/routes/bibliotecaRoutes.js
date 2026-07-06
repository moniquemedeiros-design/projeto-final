const express = require('express');
const router = express.Router();

router.get('/biblioteca', (req, res) => {

    res.json([

        {
            id: 1,
            titulo: "Como lidar com a ansiedade",
            autor: "Dr. João Silva",
            imagem: "ansiedade.jpg",
            categoria: "Ansiedade"
        },

        {
            id: 2,
            titulo: "Controle do estresse",
            autor: "Dra. Maria Souza",
            imagem: "estresse.jpg",
            categoria: "Estresse"
        }

    ]);

});

module.exports = router;