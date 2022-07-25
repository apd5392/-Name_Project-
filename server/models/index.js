const { model } = require("mongoose");
const AnimeSchema = require("./anime");
const HeroSchema = require("./hero");
const VillainSchema = require("./villain");
const OrganizationSchema = require("./organization");

const Anime = model("Ride", AnimeSchema);
const Hero = model("Park", HeroSchema);
const Villain = model("Shop", VillainSchema);
const Organization = model("Restaurant", OrganizationSchema);

module.exports = {
  Anime,
  Hero,
  Villain,
  Organization,
};
