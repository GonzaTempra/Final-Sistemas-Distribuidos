'use strict';
const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');

module.exports = {
    up: (queryInterface, Sequelize) => {
        // Se crean 2 usuarios, con sus respectivos posts
        return Promise.all([
            User.create({
                name: 'Gonzalo',
                email: 'Gonzalo@gmail.com',
                password: bcrypt.hashSync(
                    '123456789',
                    Number.parseInt(authConfig.salt)
                ),
                posts: [{
                        title: 'Titulo 1',
                        body: 'Body 1',
                    },
                    {
                        title: 'Titulo 2',
                        body: 'Body 2',
                    },
                    {
                        title: 'Titulo 3',
                        body: 'Body 3',
                    },
                ],
            }, {
                include: 'posts',
            }),

            User.create({
                name: 'Gabriel',
                email: 'Gabriel@gmail.com',
                password: bcrypt.hashSync(
                    '123456789',
                    Number.parseInt(authConfig.salt)
                ),
                posts: [{
                        title: 'Titulo 4',
                        body: 'Body 4',
                    },
                    {
                        title: 'Titulo 5',
                        body: 'Body 5',
                    },
                ],
            }, {
                include: 'posts',
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.bulkDelete('posts', null, {}),
            queryInterface.bulkDelete('users', null, {}),
        ]);
    },
};