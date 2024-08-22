import { Model, DataTypes } from 'sequelize';
import sequelize from '../app/db.js';

class Personagem extends Model {
    //caso queira usar associações

    static associate(models) {

    }
}

Personagem.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 255]
        }
    },
    ataque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    },
    defesa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 0
        }
    }
}, {
    sequelize,
    modelName: 'Personagem',
    tableName: 'personagens',
});

export default Personagem;

