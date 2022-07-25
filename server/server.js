const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const db = require("./db");
const { Hero, Villain, Organization, Anime } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("Server set up");
});
app.get("/heroes", async (req, res) => {
  const heroes = await Hero.find({});
  res.json(heroes);
});
app.get("/villains", async (req, res) => {
  const villains = await Villain.find({});
  res.json(villains);
});
// app.get("/organizations", async (req, res) => {
//   const heroes = await Organization.find({});
//   res.json(heroes);
// });
// app.get("/animes", async (req, res) => {
//   const heroes = await Anime.find({});
//   res.json(heroes);
// });

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
