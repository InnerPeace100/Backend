const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: '11780000$Aa',
    host:'localhost',
    port: 5432,
    database: "InnerPeace"

});

module.exports = pool;
