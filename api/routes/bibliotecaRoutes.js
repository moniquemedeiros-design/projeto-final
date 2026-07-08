const express = require('express');
const router = express.Router();

const arquivosBiblioteca = [
    {
        id: 1,
        titulo: "Guia Prático de Meditação",
        categoria: "Ebooks",
        descricao: "Aprenda técnicas simples para reduzir a ansiedade.",
        icone: "📘"
    },
    {
        id: 2,
        titulo: "Exercícios de Mindfulness",
        categoria: "Áudios",
        descricao: "Áudio guiado de relaxamento por 10 minutos.",
        icone: "🎧"
    },
    {
        id: 3,
        titulo: "Checklist da Rotina Saudável",
        categoria: "Ferramentas",
        descricao: "Lista para organizar hábitos saudáveis.",
        icone: "📝"
    },
    {
        id: 4,
        titulo: "Entendendo a Ansiedade",
        categoria: "Ebooks",
        descricao: "Tudo sobre sintomas e tratamento.",
        icone: "📚"
    },
    {
        id: 5,
        titulo: "Respiração Guiada",
        categoria: "Áudios",
        descricao: "Exercício para controlar crises de ansiedade.",
        icone: "🎵"
    },
    {
        id: 6,
        titulo: "Diário das Emoções",
        categoria: "Ferramentas",
        descricao: "Registre como você está se sentindo.",
        icone: "📒"
    },
    {
        id: 7,
        titulo: "Dormindo Melhor",
        categoria: "Ebooks",
        descricao: "Dicas para melhorar o sono.",
        icone: "🌙"
    },
    {
        id: 8,
        titulo: "Sons da Natureza",
        categoria: "Áudios",
        descricao: "Som relaxante de chuva e floresta.",
        icone: "🌧️"
    },
    {
        id: 9,
        titulo: "Plano de Autocuidado",
        categoria: "Ferramentas",
        descricao: "Monte sua rotina de autocuidado.",
        icone: "💚"
    },
    {
        id: 10,
        titulo: "Controle do Estresse",
        categoria: "Ebooks",
        descricao: "Aprenda a reduzir o estresse do dia a dia.",
        icone: "📗"
    },
    {
        id: 11,
        titulo: "Alimentação e Saúde Mental",
        categoria: "Ebooks",
        descricao: "Como a alimentação influencia o bem-estar.",
        icone: "📘"
    },
    {
        id: 12,
        titulo: "Vencendo a Procrastinação",
        categoria: "Ebooks",
        descricao: "Técnicas para organizar melhor sua rotina.",
        icone: "📘"
    },
    {
        id: 13,
        titulo: "Autoestima na Prática",
        categoria: "Ebooks",
        descricao: "Exercícios para fortalecer a confiança.",
        icone: "📘"
    },
    {
        id: 14,
        titulo: "Meditação Guiada para Iniciantes",
        categoria: "Áudios",
        descricao: "Sessão de meditação de 15 minutos.",
        icone: "🎧"
    },
    {
        id: 15,
        titulo: "Relaxamento com Sons do Mar",
        categoria: "Áudios",
        descricao: "Áudio relaxante com sons das ondas.",
        icone: "🎧"
    },
    {
        id: 16,
        titulo: "Podcast: Cuidando da Mente",
        categoria: "Áudios",
        descricao: "Conversas sobre saúde mental.",
        icone: "🎧"
    },
    {
        id: 17,
        titulo: "Planejador de Humor",
        categoria: "Ferramentas",
        descricao: "Acompanhe seu humor diariamente.",
        icone: "🛠️"
    },
    {
        id: 18,
        titulo: "Calculadora de Estresse",
        categoria: "Ferramentas",
        descricao: "Ferramenta para autoavaliação.",
        icone: "🛠️"
    },
    {
        id: 19,
        titulo: "Agenda de Autocuidado",
        categoria: "Ferramentas",
        descricao: "Organize atividades de bem-estar.",
        icone: "🛠️"
    },
    {
        id: 20,
        titulo: "Metas de Bem-estar",
        categoria: "Ferramentas",
        descricao: "Defina objetivos para melhorar sua saúde mental.",
        icone: "🛠️"
    },
    {
        id: 21,
        titulo: "Controle das Emoções",
        categoria: "Ebooks",
        descricao: "Aprenda a identificar e controlar emoções difíceis.",
        icone: "📘"
    },
    {
        id: 22,
        titulo: "Autocuidado Diário",
        categoria: "Ebooks",
        descricao: "Pequenas atitudes que melhoram sua qualidade de vida.",
        icone: "📘"
    },
    {
        id: 23,
        titulo: "Dormindo Melhor",
        categoria: "Ebooks",
        descricao: "Dicas para melhorar a qualidade do sono.",
        icone: "📘"
    },
    {
        id: 24,
        titulo: "Respiração Guiada Avançada",
        categoria: "Áudios",
        descricao: "Respiração profunda para reduzir ansiedade.",
        icone: "🎧"
    },
    {
        id: 25,
        titulo: "Relaxamento Muscular",
        categoria: "Áudios",
        descricao: "Exercício completo de relaxamento.",
        icone: "🎧"
    },
    {
        id: 26,
        titulo: "Meditação para Dormir",
        categoria: "Áudios",
        descricao: "Áudio relaxante para antes de dormir.",
        icone: "🎧"
    },
    {
        id: 27,
        titulo: "Foco e Concentração",
        categoria: "Áudios",
        descricao: "Sons para aumentar a concentração.",
        icone: "🎧"
    },
    {
        id: 28,
        titulo: "Música Calmante",
        categoria: "Áudios",
        descricao: "Melodias para aliviar o estresse.",
        icone: "🎧"
    },
    {
        id: 29,
        titulo: "Exercício Antiestresse",
        categoria: "Ferramentas",
        descricao: "Técnicas rápidas para aliviar a tensão.",
        icone: "🛠️"
    },
    {
        id: 30,
        titulo: "Registro de Emoções",
        categoria: "Ferramentas",
        descricao: "Anote como você se sente diariamente.",
        icone: "🛠️"
    },
    {
        id: 31,
        titulo: "Planejamento Semanal",
        categoria: "Ferramentas",
        descricao: "Organize sua rotina para reduzir a ansiedade.",
        icone: "🛠️"
    },
    {
        id: 32,
        titulo: "Exercício da Gratidão",
        categoria: "Ferramentas",
        descricao: "Fortaleça pensamentos positivos.",
        icone: "🛠️"
    },
    {
        id: 33,
        titulo: "Ansiedade na Adolescência",
        categoria: "Ebooks",
        descricao: "Como lidar com os desafios dessa fase.",
        icone: "📘"
    },
    {
        id: 34,
        titulo: "Depressão: Como Buscar Ajuda",
        categoria: "Ebooks",
        descricao: "Conheça os sinais e tratamentos.",
        icone: "📘"
    },
    {
        id: 35,
        titulo: "Autoestima Saudável",
        categoria: "Ebooks",
        descricao: "Desenvolvendo confiança em si mesmo.",
        icone: "📘"
    },
    {
        id: 36,
        titulo: "Mindfulness para Todos",
        categoria: "Ebooks",
        descricao: "Aprenda atenção plena.",
        icone: "📘"
    },
    {
        id: 37,
        titulo: "Relaxamento com Chuva",
        categoria: "Áudios",
        descricao: "Som ambiente de chuva.",
        icone: "🎧"
    },
    {
        id: 38,
        titulo: "Som da Floresta",
        categoria: "Áudios",
        descricao: "Natureza para relaxamento.",
        icone: "🎧"
    },
    {
        id: 39,
        titulo: "Meditação para Ansiedade",
        categoria: "Áudios",
        descricao: "Controle da ansiedade em 15 minutos.",
        icone: "🎧"
    },
    {
        id: 40,
        titulo: "Respire Fundo",
        categoria: "Áudios",
        descricao: "Áudio de respiração guiada.",
        icone: "🎧"
    },
    {
        id: 41,
        titulo: "Controle de Hábitos",
        categoria: "Ferramentas",
        descricao: "Acompanhe hábitos saudáveis.",
        icone: "🛠️"
    },
    {
        id: 42,
        titulo: "Diário da Gratidão",
        categoria: "Ferramentas",
        descricao: "Registre momentos positivos.",
        icone: "🛠️"
    },
    {
        id: 43,
        titulo: "Planejamento de Estudos",
        categoria: "Ferramentas",
        descricao: "Organize seu tempo.",
        icone: "🛠️"
    },
    {
        id: 44,
        titulo: "Lista de Metas",
        categoria: "Ferramentas",
        descricao: "Defina e acompanhe objetivos.",
        icone: "🛠️"
    },
    {
        id: 45,
        titulo: "Superando o Medo",
        categoria: "Ebooks",
        descricao: "Aprenda a enfrentar seus medos.",
        icone: "📘"
    },
    {
        id: 46,
        titulo: "Inteligência Emocional",
        categoria: "Ebooks",
        descricao: "Desenvolva habilidades emocionais para o dia a dia.",
        icone: "📘"
    },
    {
        id: 47,
        titulo: "Bem-estar no Trabalho",
        categoria: "Ebooks",
        descricao: "Saúde mental no ambiente profissional.",
        icone: "📘"
    },
    {
        id: 48,
        titulo: "Equilíbrio Entre Vida e Trabalho",
        categoria: "Ebooks",
        descricao: "Evite o esgotamento emocional.",
        icone: "📘"
    },
    {
        id: 49,
        titulo: "Momento Zen",
        categoria: "Áudios",
        descricao: "Música instrumental relaxante.",
        icone: "🎧"
    },
    {
        id: 50,
        titulo: "Meditação Guiada Completa",
        categoria: "Áudios",
        descricao: "Sessão completa de meditação.",
        icone: "🎧"
    }
];

router.get('/biblioteca', (req, res) => {
    res.json(arquivosBiblioteca);
});

module.exports = router;
