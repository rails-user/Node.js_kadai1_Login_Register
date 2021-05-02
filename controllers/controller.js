exports.resLoginPage = (req, res) => {
    //ejsで応答する
    res.render("../views/login.ejs");
}

exports.resRegister = (req, res ) => {
    //ejsで応答する
    res.render("../views/register.ejs");
}