const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", (req, res) => {
    res.send("Api da Horta Inteligente.")
});

router.get("/getUsuarios", controller.getUsuarios);

module.exports = router;