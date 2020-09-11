const express = require("express");
/** body-parser 是一個 HTTP 請求解析的中介軟體，使用這個插件可以解析 JSON、Raw、text、XML、URL-encoded 格式的請求，
 * 你可以在 Postman 上看到這些格式，僅設妳今天 POST 東西到 body 時，後端必須要靠 body-parser 來解析你的資料。 */
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
  origin: "http://neevrleave0916.com:34566"
};

/** 使用中間件 */
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// 路由
app.get("/", (req, res) => {
  res.json({ message: "Welcome to this application." });
});

//require("./app/routes/api/turorials")(app);

const apiRouter = require("./app/routes/api");
app.use('/api',apiRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
