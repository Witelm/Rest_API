const express = require("express");

const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");

const app = express();
dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_DB = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose
  .connect(MONGO_DB)
  .then(() => {
    console.log("Подключено к MongoDB");
  })
  .catch((error) => {
    console.error("Ошибка при подключении к MongoDB:", error);
  });

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World!");
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);

app.get("/", helloWorld);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST");
});

app.listen(PORT, () => {
  console.log(`сервер запущен по адресу ${API_URL}:${PORT}`);
});
