const express = require('express');
const router = express.Router();

const itensBiblioteca = [
    // ==========================================
    // E-BOOKS (13 itens)
    // ==========================================
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Guia de Ansiedade Controlada",
        descricao: "Técnicas acessíveis e gratuitas para gerenciamento de crises no ambiente doméstico.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Inteligência Emocional na Prática",
        descricao: "Como entender e regular suas emoções sem custos com manuais complexos.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Mindfulness para Iniciantes",
        descricao: "Exercícios simples de atenção plena desenhados para rotinas multitarefas.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Vencendo a Procrastinação",
        descricao: "Métodos práticos de organização pessoal voltados para estudantes e trabalhadores.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "O Poder do Sono Reparador",
        descricao: "Higiene do sono adaptada para contextos urbanos e rotinas exaustivas.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Gestão de Estresse no Trabalho",
        descricao: "Direitos e práticas de saúde mental para prevenção do esgotamento profissional.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Autoestima e Autocuidado",
        descricao: "Fortalecimento da identidade e amor-próprio em comunidades vulneráveis.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Resiliência em Tempos Difíceis",
        descricao: "Apoio mútuo e estratégias comunitárias para enfrentar adversidades financeiras.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Comunicação Assertiva e Vínculos",
        descricao: "Manual prático para melhorar o diálogo familiar e evitar conflitos.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Manual da Mente Calma",
        descricao: "Pequenos passos diários para reduzir pensamentos acelerados sem medicamentos.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Superando Traumas Ligeiros",
        descricao: "Leitura de suporte psicológico básico focado em superação e acolhimento.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Rotinas Matinais Saudáveis",
        descricao: "Como organizar as primeiras horas do dia para manter a estabilidade emocional.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },
    {
        icone: "📚",
        categoria: "E-books",
        titulo: "Equilíbrio Vida e Família",
        descricao: "Dicas de saúde mental aplicadas à dupla jornada de trabalho e cuidados do lar.",
        imagemUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.scielo.br"
    },

    // ==========================================
    // ÁUDIOS (12 itens)
    // ==========================================
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Meditação Guiada: Alívio do Foco",
        descricao: "Áudio curto de 5 minutos para acalmar a mente durante o transporte público.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Sons de Chuva para Relaxar",
        descricao: "Áudio contínuo focado em marcar ruídos externos e induzir ao sono profundo.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Frequência Alfa: Concentração",
        descricao: "Ondas sonoras que auxiliam o cérebro a focar nos estudos de forma natural.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Ondas Binaurais de Relaxamento",
        descricao: "Terapia sonora de baixo consumo de dados para desacelerar o batimento cardíaco.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Ruído Branco para Dormir",
        descricao: "Frequência neutra ideal para acalmar ambientes barulhentos e melhorar o repouso.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Meditação: Alívio de Crise imediata",
        descricao: "Instruções em áudio para conter episódios severos de pânico e ansiedade.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Podcast: Psicologia Acessível",
        descricao: "Episódio debate sobre autocuidado sem precisar gastar dinheiro com produtos caros.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Áudio de Respiração Quadrada",
        descricao: "Exercício guiado por voz para controle de impulsos e reequilíbrio físico.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Sons da Natureza: Floresta",
        descricao: "Paisagem sonora relaxante para práticas de descompressão mental em casa.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Afirmações Positivas Diárias",
        descricao: "Minuto de conexão matinal focado em autoconfiança e resiliência diária.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Relaxamento Muscular Progressivo",
        descricao: "Áudio instrutivo para aliviar tensões físicas causadas pelo estresse acumulado.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },
    {
        icone: "🎧",
        categoria: "Áudios",
        titulo: "Hipnose Leve para Ansiedade",
        descricao: "Áudio de relaxamento guiado focado em acalmar pensamentos intrusivos de forma segura.",
        imagemUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://archive.org/details/audio"
    },

    // ==========================================
    // FERRAMENTAS (12 itens)
    // ==========================================
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Diário de Humor Semanal",
        descricao: "Ficha interativa para registrar variações de humor e identificar gatilhos mentais.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Planilha de Hábitos Saudáveis",
        descricao: "Ferramenta leve de acompanhamento para beber água, caminhar e dormir melhor.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Checklist de Autocuidado Grátis",
        descricao: "Lista de tarefas fáceis de acolhimento psicológico sem custo algum.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Rastreador de Gatilhos Emocionais",
        descricao: "Formulário digital rápido para anotar momentos de estresse alto e as causas.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Exercício de Escrita Terapêutica",
        descricao: "Modelo de perguntas norteadoras para externalizar sentimentos pesados na folha.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Roda da Vida Emocional",
        descricao: "Gráfico de autoavaliação para analisar quais áreas da sua rotina precisam de atenção.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Cronograma de Pausas Ativas",
        descricao: "Planejador de pausas de 5 minutos essenciais para quem trabalha de forma exaustiva.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Planner de Metas Realistas",
        descricao: "Organização de pequenos passos alcançáveis para não gerar frustração e ansiedade.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Tabela de Reestruturação Cognitiva",
        descricao: "Exercício baseado em TCC para transformar pensamentos negativos em realistas.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Diário de Gratidão Semanal",
        descricao: "Exercício científico focado em registrar pequenos pontos positivos da rotina.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Mapa de Gestão do Tempo",
        descricao: "Método visual simplificado para organizar tarefas de forma não opressiva.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },
    {
        icone: "🛠️",
        categoria: "Ferramentas",
        titulo: "Técnica de Aterramento 5-4-3-2-1",
        descricao: "Infográfico prático para se reconectar com o presente e conter crises repentinas.",
        imagemUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.google.com"
    },

    // ==========================================
    // VÍDEOS (13 itens)
    // ==========================================
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Como Controlar a Respiração",
        descricao: "Vídeo curto explicando a mecânica diafragmática para reduzir picos de estresse.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Entendendo a Crise de Pânico",
        descricao: "Explicação didática sobre os sintomas físicos e como passar por eles com segurança.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Exercícios de Alongamento Rápido",
        descricao: "Movimentos fáceis para aliviar dores corporais causadas pela tensão emocional diária.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Palestra: O que é TCC?",
        descricao: "Introdução descomplicada aos conceitos da Terapia Cognitivo-Comportamental.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Rotina de Ioga de 10 Minutos",
        descricao: "Prática leve e adaptada para espaços pequenos para relaxar corpo e mente.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Como Lidar com Críticas de Forma Saudável",
        descricao: "Estratégias mentais para proteger a autoestima em ambientes tóxicos.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Mindset de Crescimento Explicado",
        descricao: "Como treinar o cérebro para aprender com as dificuldades cotidianas.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Documentário: Sono e Saúde Mental",
        descricao: "A importância biológica do descanso na regulação dos hormônios do estresse.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Técnicas de Foco Pomodoro",
        descricao: "Guia prático em vídeo ensinando como dividir o tempo de estudos sem exaustão.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Webinar: Burnout e Prevenção Ativa",
        descricao: "Painel com especialistas discutindo os limites saudáveis na rotina de trabalho.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Guia Visual de Meditação Sentada",
        descricao: "Passo a passo da postura correta e foco atencional para iniciantes.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "Descomplicando a Ansiedade Social",
        descricao: "Conselhos psicológicos para perder o medo de interações em público.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    },
    {
        icone: "🎥",
        categoria: "Vídeos",
        titulo: "O Poder da Vulnerabilidade",
        descricao: "Análise psicológica sobre como aceitar suas fraquezas pode fortalecer sua mente.",
        imagemUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
        linkConteudo: "https://www.youtube.com"
    }
];

// Rota Express que envia os 50 itens para o Front-end Angular
router.get('/biblioteca', (req, res) => {
    res.status(200).json(itensBiblioteca);
});

module.exports = router;