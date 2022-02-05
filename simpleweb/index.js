const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("supp?");
  res.send("sup?");
});

app.listen("8080", () => {
  console.log("Listen on port 8080");
});
