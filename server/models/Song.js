const { Schema, model } = require("mongoose");
const albumSchema = require("./Album");

const songSchema = new Schema(
  {
    song_name: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280,
    },
    artist_name: { type: String },
    progression: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    tempo: {
      type: String,
      required: true,
    },
    album: [albumSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
const Song = model("Song", songSchema);

module.exports = Song;
