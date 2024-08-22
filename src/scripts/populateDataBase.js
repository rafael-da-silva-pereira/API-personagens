import sequelize from "../app/db.js";
import Personagem from '../models/Personagem.js';

const createPersonagem = async () => {
    try {
        await sequelize.sync();

        const personagem = await Personagem.create({
            nome: 'Fenix',
            ataque: 92,
            defesa: 80
        });

        console.log('Personagem criado com sucesso:', personagem.toJSON());
    } catch (error) {
        console.error('Erro ao criar personagem:', error);
    } finally {
        await sequelize.close();
    }
};

createPersonagem();

//Para executar o script, abrir o terminal e execute: node src/scripts/populateDatabase.js

