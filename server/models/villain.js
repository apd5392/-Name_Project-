const { Schema } = require("mongoose");

const Villain = new Schema(
  {
    image: { type: String },
    name: { type: String, required: true },
    otherName: [{ type: String }],
    anime: [{type: String}],
    age: { type: Number },
    aliveOrDeath: { type: String },
    organizations: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = Villain;