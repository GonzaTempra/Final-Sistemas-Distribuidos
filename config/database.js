require('dotenv').config();

module.exports = {

    //db config
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_DATABASE || 'sequelize',
    dialect: process.env.DB_DIALECT || 'mysql',

    //seeders config
    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',

    //migrations config
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',

}