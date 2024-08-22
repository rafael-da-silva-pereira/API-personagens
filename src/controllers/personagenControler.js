import Personagem from "../models/Personagem.js";

export const createPersonagem = async (req, res) => {
    try {
        const { nome, ataque, defesa } = req.body;
        const personagem = await Personagem.create({ nome, ataque, defesa });
        res.status(201).json(personagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para listar todos os personagens
export const listAllPersonagens = async (req, res) => {
    try {
        const personagens = await Personagem.findAll();
        res.status(200).json(personagens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPersonagem = async (req, res) => {
    try {
        const personagem = await Personagem.findByPk(req.params.id);
        if (!personagem) {
            return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        res.status(200).json(personagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePersonagem = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, ataque, defesa } = req.body;
        const personagem = await Personagem.findByPk(id);
        if (!personagem) {
            return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        await personagem.update({ nome, ataque, defesa });
        res.status(200).json(personagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePersonagem = async (req, res) => {
    try {
        const { id } = req.params;
        const personagem = await Personagem.findByPk(id);
        if (!personagem) {
            return res.status(404).json({ error: 'Personagem não encontrado' });
        }
        await personagem.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};