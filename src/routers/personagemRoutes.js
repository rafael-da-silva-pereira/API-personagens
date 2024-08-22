
import express from 'express';
import {
    createPersonagem,
    listAllPersonagens,
    getPersonagem,
    updatePersonagem,
    deletePersonagem,
} from '../controllers/personagenControler.js';

const router = express.Router();

// Definindo as rotas
router.post('/personagens', createPersonagem);
router.get('/personagens', listAllPersonagens);
router.get('/personagens/:id', getPersonagem);
router.put('/personagens/:id', updatePersonagem);
router.delete('/personagens/:id', deletePersonagem);


export default router;
