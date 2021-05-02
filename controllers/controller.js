exports.resLoginPage = (req, res, next) => {
    //ejsで応答する
    res.render("../views/login.ejs");
    next();
}

exports.resRegister = (req, res ,next) => {
    //ejsで応答する
    res.render("../views/register.ejs");
    next();
}