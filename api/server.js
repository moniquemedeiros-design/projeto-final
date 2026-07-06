const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const bibliotecaRoutes = require('./routes/biblioteca');
// Permite que o Angular (na porta 4200) acesse esta API sem bloqueios
app.use(cors());
app.use(express.json());
app.use('/api', bibliotecaRoutes);

// Dados simulados da biblioteca (Cards e Categorias)
const arquivosBiblioteca = [
    { id: 1, titulo: 'Guia Prático de Meditação', categoria: 'Ebooks', descricao: 'Técnicas de respiração para controle de ansiedade diária.', icone: '📖' },
    { id: 2, titulo: 'Exercício de Mindfulness', categoria: 'Áudios', descricao: 'Áudio guiado de 10 minutos para foco e atenção plena.', icone: '🎧' },
    { id: 3, titulo: 'Checklist da Rotina Matinal', categoria: 'Ferramentas', descricao: 'Planilha em PDF para organizar hábitos saudáveis ao acordar.', icone: '🛠️' },
    { id: 4, titulo: 'Entendendo a Depressão', categoria: 'Ebooks', descricao: 'Artigo detalhado sobre sintomas, causas e redes de apoio.', icone: '📖' },
    { id: 5, titulo: 'Sons da Natureza para Dormir', categoria: 'Áudios', descricao: 'Trilha sonora relaxante para melhorar a qualidade do sono.', icone: '🎧' },
    { id: 6, titulo: 'Diário de Pensamentos Dys', categoria: 'Ferramentas', descricao: 'Modelo de registro para reestruturação cognitiva diária.', icone: '🛠️' }
];

// Rota da API que o Angular vai chamar
app.get('/api/biblioteca', (req, res) => {
    res.json(arquivosBiblioteca);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando perfeitamente em http://localhost:${PORT}`);
});

