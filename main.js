const controller = require("./controllers/controller");
//expressモジュールをアプリケーションに追加
express = require("express"),
//インスタンスの生成
app = express();
//ブランチがdevelopなのでポート番号は3000を設定する
app.set("port", 3000);
//ejsの設定
app.set("view engine","ejs");

//パスに応じたコントローラの呼び出し
app.get("/login", controller.resLoginPage);
app.get("/register", controller.resRegister);

app.listen(app.get("port"), () => {
	console.log(`Server is listening on port number:${app.get("port")}`);
});