const {DataTypes} = require('sequelize')
const instance = require('../dbconnection')

const user = instance.sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      uuid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: 'users'
    }
)

exports.model = user