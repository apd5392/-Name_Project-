const db = require("../db");
const { Organization } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const organizations = [
    {
      name: "Frieza Force",
      leader: "Frieza",
      members: "",
      enemies: "",
    },
    {
      name: "Team Universe 7",
      leader: "Beerus",
      members: "",
      enemies: "",
    },
    {
      name: "Galactic Patrol",
      leader: "Galactic King",
      members: "",
      enemies: "",
    },
    {
      name: "Dragon Team",
      leader: "Goku",
      members: "",
      enemies: "",
    },
    {
      name: "Saiya Squad",
      leader: "Great Saiyaman",
      members: "",
      enemies: "",
    },
    {
      name: "Time Patrol",
      leader: "Future Trunks",
      members: "",
      enemies: "",
    },
    {
      name: "Capsule Corporation",
      leader: "Bulma",
      members: "",
      enemies: "",
    },
    {
      name: "Kikoukenjutsu Sword School",
      leader: ["Goten", "Trunks"],
      members: "",
      enemies: "",
    },
  ];
  await Organization.deleteMany();
  await Organization.insertMany(organizations);
  console.log("Organization List:", organizations);
};

const run = async () => {
  await main();
  db.close();
};

run();
