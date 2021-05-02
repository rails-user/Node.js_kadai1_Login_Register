//controllerモジュールをアプリケーションに追加
const controller = require("../controllers/controller.js");
//expressモジュールをアプリケーションに追加
express = require("express")
const router = express.Router()

router.get("/login", (req, res) => {
    controller.resLoginPage(req, res);
})

router.get("/register", (req, res) => {
    controller.resRegister(req, res);
})

module.exports = router