const { model } = require("mongoose");
const AnimeSchema = require("./anime");
const HeroSchema = require("./hero");
const VillainSchema = require("./villain");
const OrganizationSchema = require("./organization");

const Anime = model("Anime", AnimeSchema);
const Hero = model("Hero", HeroSchema);
const Villain = model("Villain", VillainSchema);
const Organization = model("Organization", OrganizationSchema);

module.exports = {
  Anime,
  Hero,
  Villain,
  Organization,
};
