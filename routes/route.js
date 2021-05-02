//controllerモジュールをアプリケーションに追加
const controller = require("../controllers/controller.js");
//expressモジュールをアプリケーションに追加
express = require("express")
const router = express.Router()

router.get("/login", (req, res, next) => {
    controller.resLoginPage(req, res, next);
    next();
})
router.get("/register", (req, res, next) => {
    controller.resRegister(req, res, next);
    next();
})

module.exports = router