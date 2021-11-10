'use strict';

const { DATE } = require("sequelize");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkInsert(
                'roles', [
                    { name: 'admin', createdAt: new Date(), updatedAt: new Date() },
                    { name: 'user', createdAt: new Date(), updatedAt: new Date() },
                ],
            ),
            queryInterface.bulkInsert(
                'user-role', [{
                        userId: 13,
                        roleId: 17,
                    },
                    {
                        userId: 13,
                        roleId: 18,
                    },
                    {
                        userId: 14,
                        roleId: 18,
                    }
                ]
            )
        ])
    },

    down: async(queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkDelete('roles', null, {}),
            queryInterface.bulkDelete('user-role', null, {}),
        ]);
    }
};