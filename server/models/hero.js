const { Schema } = require("mongoose");

const Hero = new Schema(
  {
    image: { type: String },
    name: { type: String, required: true },
    otherName: { type: Array },
    anime: {type: Array},
    age: { type: Number },
    aliveOrDeath: { type: String },
    organizations: { type: Array },
  },
  { timestamps: true }
);

module.exports = Hero;
