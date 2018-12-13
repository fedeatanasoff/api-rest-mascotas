const functions = require("firebase-functions");
const express = require("express");
const app = express();

const createServer = () => {
  app.get("/mascotas", (req, res) => {
    res.send({
      mensaje: "hello friend"
    });
  });

  return app;
};

exports.helloWorld = functions.https.onRequest(createServer());
