const db = require("../db");
const { Organization } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const organizations = [
    {
      name: "Frieza Force",
      leader: "Frieza",
      members: "",
    },
    {
      name: "Team Universe 7",
      leader: "Beerus",
      members: "",
    },
    {
      name: "Galactic Patrol",
      leader: "Galactic King",
      members: "",
    },
    {
      name: "Dragon Team",
      leader: "Goku",
      members: "",
    },
    {
      name: "Saiya Squad",
      leader: "Great Saiyaman(Gohan)",
      members: "",
    },
    {
      name: "Time Patrol",
      leader: "Future Trunks",
      members: "",
    },
    {
      name: "Capsule Corporation",
      leader: "Bulma",
      members: "",
    },
    {
      name: "Organization of Babidi",
      leader: ["Bibidi, ", "Babidi"],
      members: "",
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
