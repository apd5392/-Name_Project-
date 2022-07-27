const db = require("../db");
const { Anime } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const animes = [
    {
      image: "https://i.imgur.com/TKAfhRp.png",
      name: "Dragon Ball",
      episodes: 153,
    },
    {
      image: "https://i.imgur.com/vClUJGr.png",
      name: "Dragon Ball Z",
      episodes: 291,
    },
    {
      image: "https://i.imgur.com/GbWvvU6.png",
      name: "Dragon Ball Super",
      episodes: 131,
    },
    {
      image: "https://i.imgur.com/dV3fi4q.png",
      name: "Dragon Ball GT",
      episodes: 64,
    },
  ];
  await Anime.deleteMany();
  await Anime.insertMany(animes);
  console.log("Anime List:", animes);
};

const run = async () => {
  await main();
  db.close();
};

run();
