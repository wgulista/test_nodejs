require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.APP_PORT || 5000;

/* CONTROLLER  */
const playersRouter = require("./api/players/players.router");

/* ROUTER */
app.use("/players", playersRouter);

const listener = app.listen(port, () => {
  console.log("Server Up and Running on port " + port)
});

module.exports = listener.address().port;