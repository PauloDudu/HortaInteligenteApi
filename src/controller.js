const pool =  require("./database");
const queries = require("./queries");

const getUsuarios = (req, res) => {
    pool.query(queries.getUsuario, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getUsuarios
}