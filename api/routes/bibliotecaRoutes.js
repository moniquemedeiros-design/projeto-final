const express = require("express");
const router = express.Router();


const arquivosBiblioteca = [
    {
        titulo: "Entendendo a Ansiedade",
        tipo: "E-book",
        descricao: "Material educativo sobre ansiedade.",
        capa: "https://images.unsplash.com/photo-1544717305-2782549b5136"
    },

    {
        titulo: "Inteligência Emocional",
        tipo: "E-book",
        descricao: "Conteúdo sobre emoções.",
        capa: "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
    },

    {
        titulo: "O Poder do Hábito",
        tipo: "E-book",
        descricao: "Mudança de hábitos e comportamento.",
        capa: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    },

    {
        titulo: "Mindfulness",
        tipo: "E-book",
        descricao: "Introdução à atenção plena.",
        capa: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
    },

    {
        titulo: "Autocuidado Emocional",
        tipo: "E-book",
        descricao: "Práticas de autocuidado.",
        capa: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0"
    },

    {
        titulo: "Meditação Guiada",
        tipo: "Áudio",
        descricao: "Áudio de relaxamento.",
        capa: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
    },

    {
        titulo: "Respiração para Ansiedade",
        tipo: "Áudio",
        descricao: "Exercícios de respiração.",
        capa: "https://images.unsplash.com/photo-1518611012118-696072aa579a"
    },

    {
        titulo: "Sons da Natureza",
        tipo: "Áudio",
        descricao: "Sons relaxantes.",
        capa: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    },

    {
        titulo: "Relaxamento Profundo",
        tipo: "Áudio",
        descricao: "Relaxamento mental.",
        capa: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88"
    },

    {
        titulo: "Meditação para Dormir",
        tipo: "Áudio",
        descricao: "Áudio para descanso.",
        capa: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55"
    },

    {
        titulo: "Diário Emocional",
        tipo: "Ferramenta",
        descricao: "Registro de sentimentos.",
        capa: "https://images.unsplash.com/photo-1455390582262-044cdead277a"
    },

    {
        titulo: "Roda das Emoções",
        tipo: "Ferramenta",
        descricao: "Identificação emocional.",
        capa: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
    },

    {
        titulo: "Checklist de Autocuidado",
        tipo: "Ferramenta",
        descricao: "Lista de cuidados pessoais.",
        capa: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b"
    },

    {
        titulo: "Planejador de Bem-Estar",
        tipo: "Ferramenta",
        descricao: "Organização de rotina.",
        capa: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f"
    },

    {
        titulo: "Mapa de Sentimentos",
        tipo: "Ferramenta",
        descricao: "Reflexão emocional.",
        capa: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },

    {
        titulo: "Como Controlar a Ansiedade",
        tipo: "Vídeo",
        descricao: "Vídeo educativo.",
        capa: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
        link: "https://www.youtube.com"
    },

    {
        titulo: "Mindfulness para Iniciantes",
        tipo: "Vídeo",
        descricao: "Vídeo sobre mindfulness.",
        capa: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        link: "https://www.youtube.com"
    },

    {
        titulo: "Técnicas de Relaxamento",
        tipo: "Vídeo",
        descricao: "Exercícios de relaxamento.",
        capa: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
        link: "https://www.youtube.com"
    },

    {
        titulo: "Saúde Mental no Dia a Dia",
        tipo: "Vídeo",
        descricao: "Cuidados com saúde mental.",
        capa: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
        link: "https://www.youtube.com"
    },

    {
        titulo: "Inteligência Emocional na Prática",
        tipo: "Vídeo",
        descricao: "Aplicação da inteligência emocional.",
        capa: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        link: "https://www.youtube.com"
    }


];


router.get("/", (req, res) => {
    res.json(arquivosBiblioteca);
});


module.exports = router;