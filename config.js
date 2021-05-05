const rc = require('rc');

module.exports = rc('dont-miss-it', {
    connection: './data',
    secret: 'VERYSECRETKEY',
});