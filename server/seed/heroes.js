const db = require("../db");
const { Hero } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const heroes = [
    {
      image: "-",
      name: "Goku",
      otherName: [
        "Kakarot",
        "Present Goku",
        "Goku Son",
        "Son Gokoh",
        "Son Gokou",
        "Son Gokuh",
        "Son Gokuu",
        "Sangoku",
        "Kakarotto",
        "Kakaroth",
        "Kong",
        "Zero",
      ],

      anime: [
        "Dragon Ball",
        "Dragon Ball Z",
        "Dragon Ball GT",
        "Dragon Ball Super",
        "Dragon Ball Heroes",
      ],
      age: 40,
      aliveOrDeath: "Alive",
      organizations: [
        "Dragon Team",
        "Turtle School (formerly)",
        "Team Universe 7",
        "Galactic Patrol",
      ],
    },
    {
      image: "-",
      name: "Vegeta",
      otherName: [
        "Vegeta IV",
        "Vegita",
        "Prince of all Saiyans",
        "Saiyan Prince",
      ],
      anime: [
        "Dragon Ball",
        "Dragon Ball Z",
        "Dragon Ball GT",
        "Dragon Ball Super",
        "Dragon Ball Heroes",
      ],
      age: 42,
      aliveOrDeath: "Alive",
      organizations: [
        "Frieza Force (formerly)",
        "Dragon Team",
        "Organization of Babidi (formerly)",
        "Team Universe 7",
        "Galactic Patrol",
      ],
    },
  ];
  await Hero.deleteMany();
  await Hero.insertMany(heroes);
  console.log("Hero List:", heroes);
};

const run = async () => {
  await main();
  db.close();
};

run();
