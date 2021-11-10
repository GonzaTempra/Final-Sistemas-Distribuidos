module.exports = {
    secret: process.env.AUTH_SECRET || 'distribuidos',
    expires: process.env.AUTH_EXPIRES || '1d',
    salt: process.env.AUTH_SALT || '10',
};