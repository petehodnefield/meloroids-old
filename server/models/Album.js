const { Schema, model } = require("mongoose");

const albumSchema = new Schema(
  {
    album_name: {
      type: String,
      required: true,
      maxlength: 280,
    },
    artist_name: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
module.exports = albumSchema;
