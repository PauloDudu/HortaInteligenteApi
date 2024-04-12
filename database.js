const Pool = require("pg").Pool;

// const pool = new Pool({
//     host: "localhost",
//     user: "postgres",
//     database: "horta-inteligente",
//     password: "123123",
//     port: 5432
// });

const pool = new Pool({
    connectionString: "postgres://default:RVqdB0oCri1t@ep-old-dawn-a4zamoyn-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
})

pool.connect((err) => {
    if (err) throw err;
    console.log("Connect to PostgreSQL successfully!");
})

module.exports = pool;