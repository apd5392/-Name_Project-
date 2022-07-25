const { Schema } = require("mongoose");

const Organization = new Schema(
  {
    name: { type: String, required: true },
    otherName: { type: String },
    episodes: { type: Number}
  },
  { timestamps: true }
);

module.exports = Organization;
