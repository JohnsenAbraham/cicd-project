const serverless = require("serverless-http");
const express = require("express");

const app = express();

// IMPORTANT FIX
app.get("/", (req, res) => {
  res.json({ message: "API is working " });
});

// ALSO HANDLE ANY PATH
app.get("*", (req, res) => {
  res.json({ message: "Route working ", path: req.path });
});

module.exports.handler = serverless(app);
