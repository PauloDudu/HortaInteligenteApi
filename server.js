const express = require("express");
const rotasHorta = require("./src/routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/horta", rotasHorta);

app.listen(process.env.PORT.port, () => console.log(`App rodando em: http://localhost:${port}`));