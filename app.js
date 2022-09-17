const express = require("express");
const app = express();
const config = require("./config");
const movieRouter = require("./Movie");

const LoggerMiddleware = (req, res, next) => {
  console.log(`Logged ${req.url} ${req.method}`);
  next();
};

app.use(LoggerMiddleware);
app.use(express.json());
app.use("/api/v1/movies", movieRouter);
app.use((req, res, next) => {
  res.status(400).send("Resource not Found");
});
app.listen(config.PORT, () => {
  console.log(`Listenin on port ${config.PORT}`);
});

module.exports = app;
