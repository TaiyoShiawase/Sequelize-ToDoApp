const {DataTypes} = require('sequelize')
const instance = require('../dbconnection')

const task = instance.sequelize.define('tasks', {
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
        task: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        tableName: 'tasks'
    }
)

exports.model = task