const express = require("express");
const rotasHorta = require("./src/routes");

const app = express();

app.use(express.json());
app.use("/api/v1/horta", rotasHorta);

app.listen(5000);