const express = require("express");
const testAPI = require("./testAPI");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
