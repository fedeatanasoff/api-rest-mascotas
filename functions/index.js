const functions = require("firebase-functions");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://fd:fd1234@ds145289.mlab.com:45289/rest-api");

const createServer = () => {
  app.get("/mascotas", (req, res) => {
    res.send({
      mensaje: "hello friend"
    });
  });

  app.post("/mascotas", (req, res) => {
    res.send("creando mascota");
  });

  app.get("/mascotas/:id/daralta", (req, res) => {
    res.send("dar alta");
  });

  return app;
};

exports.helloWorld = functions.https.onRequest(createServer());
