const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            uniqe: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    // {
    //     hooks: {
    //         beforeCreate: async (newUserData) => {
    //           newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //           return newUserData;
    //         },
    //         beforeUpdate: async (updatedUserData) => {
    //           updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    //           return updatedUserData;
    //         },
    //       },
    //       sequelize,
    //       timestamps: false,
    //       freezeTableName: true,
    //       underscored: true,
    //       modelName: 'user',
    // }
);