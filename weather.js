const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "./Weather-app")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./Weather-App/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send(`Page not found 404`);
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
