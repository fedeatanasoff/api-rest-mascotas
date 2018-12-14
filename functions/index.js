const functions = require("firebase-functions");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const { username, password } = functions.config().mongo;

const mongouri = `mongodb://${username}:${password}@ds145289.mlab.com:45289/rest-api`;

mongoose.connect(
  mongouri,
  { useNewUrlParser: true }
);

const Mascotas = require("./Mascotas");

const createServer = () => {
  app.use(
    cors({
      origin: true
    })
  );

  // --> RUTAS
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

  app.delete("/mascotas/:id/daralta", async (req, res) => {
    let { id } = req.params;

    await Mascotas.deleteOne({ _id: id }).exec();

    res.sendStatus(204);
  });

  return app;
};

exports.helloWorld = functions.https.onRequest(createServer());
