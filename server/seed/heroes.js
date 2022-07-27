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
        "Goku Son",
        "Son Gokou",
        "Sangoku",
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
      age: 43,
      aliveOrDeath: "Alive",
      organizations: ["Dragon Team", "Team Universe 7", "Galactic Patrol"],
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
      age: 48,
      aliveOrDeath: "Alive",
      organizations: [
        "Frieza Force",
        "Dragon Team",
        "Team Universe 7",
        "Galactic Patrol",
      ],
    },
    {
      image: "-",
      name: "Gohan",
      otherName: [
        "Gohan Son",
        "Great Saiyaman",
        "The Golden Fighter",
        "The Golden Warrior",
        "The Chosen One",
        "Monkey Boy",
        "Ultimate Gohan",
      ],
      anime: [
        "Dragon Ball Z",
        "Dragon Ball GT",
        "Dragon Ball Super",
        "Dragon Ball Heroes",
      ],
      age: 23,
      aliveOrDeath: "Alive",
      organizations: [
        "Dragon Team",
        "Saiya Squad",
        "Team Universe 7",
        "Galactic Patrol",
      ],
    },
    {
      image: "-",
      name: "Trunks",
      otherName: ["Kid Trunks", "Chibi Trunks", "Mini Trunks"],
      anime: ["Dragon Ball Z", "Dragon Ball GT", "Dragon Ball Super"],
      age: 8,
      aliveOrDeath: "Alive",
      organizations: [
        "Dragon Team",
        "Saiya Squad",
        "Capsule Corporation",
        "Kikoukenjutsu Sword School",
      ],
    },
    {
      image: "-",
      name: "Future Trunks",
      otherName: [
        "Alternate timeline Trunks",
        "Mirai Trunks",
        "Trunks of the Future",
        `"Cool" Trunks`,
      ],
      anime: ["Dragon Ball Z", "Dragon Ball Super", "Dragon Ball Heroes"],
      age: 30,
      aliveOrDeath: "Alive",
      organizations: ["Dragon Team", "Time Patrol", "Earth's Resistance"],
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
