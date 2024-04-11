const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "horta-inteligente",
    password: "123123",
    port: 5432
});

module.exports = pool;