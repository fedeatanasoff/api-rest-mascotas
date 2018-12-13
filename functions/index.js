const functions = require("firebase-functions");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://fd:fd1234@ds145289.mlab.com:45289/rest-api",
  { useNewUrlParser: true }
);

const Mascotas = require("./Mascotas");

const createServer = () => {
  app.get("/mascotas", async (req, res) => {
    let result = await Mascotas.find({}).exec();

    res.send(result);
  });

  app.post("/mascotas", async (req, res) => {
    let { body } = req;
    let mascota = new Mascotas(body);
    await mascota.save();

    res.sendStatus(204);
  });

  app.get("/mascotas/:id/daralta", (req, res) => {
    res.send("dar alta");
  });

  return app;
};

exports.helloWorld = functions.https.onRequest(createServer());
