const db = require("../db");
const { Villain } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const villains = [
    {
      image: "https://i.imgur.com/eWNNbIV.png",
      name: "Frieza",
      otherName: [
        "Freezer, ",
        "Freeza",
        "F",
        "Lord Frieza",
        "Emperor Frieza",
        "Universal Emperor",
      ],

      anime: [
        "Dragon Ball Z, ",
        "Dragon Ball GT, ",
        "Dragon Ball Super",
      ],
      age: 43,
      organizations: ["Frieza Force, ", "Ghost Warriors, ", "Team Universe 7"],
    },
    {
      image: "https://i.imgur.com/BSDe6r2.png",
      name: "Cell",
      otherName: [
        "Future Cell"
      ],
      anime: [
        "Dragon Ball Z, ",
        "Dragon Ball GT, ",
        "Dragon Ball Super",
      ],
      age: null,
      organizations: [
        "Red Ribbon Army",
      ],
    },
    {
      image: "https://i.imgur.com/rbAWSou.png",
      name: "Kid Buu",
      otherName: [
        "Buu, ",
        "Kid Boo, ",
        "Majin Buu, ",
        "Majin Boo, ",
        "Pure Buu",
      ],
      anime: [
        "Dragon Ball Z",
        "Dragon Ball GT",
        "Dragon Ball Super",
      ],
      age: null,
      organizations: [
        "Organization of Babidi, ",
        "Mastermind's Group",
      ],
    },
  ];
  await Villain.deleteMany();
  await Villain.insertMany(villains);
  console.log("Hero List:", villains);
};

const run = async () => {
  await main();
  db.close();
};

run();
