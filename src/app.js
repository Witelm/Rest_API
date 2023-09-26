const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const { PORT, API_URL, MONGO_DB } = process.env;

mongoose.connect(MONGO_DB).catch((error) => console.log(error));

const app = express();

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
