const Pool = require("pg").Pool;

// const pool = new Pool({
//     host: "localhost",
//     user: "postgres",
//     database: "horta-inteligente",
//     password: "123123",
//     port: 5432
// });

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err) => {
    if (err) throw err;
    console.log("Connect to PostgreSQL successfully!");
})

module.exports = pool;