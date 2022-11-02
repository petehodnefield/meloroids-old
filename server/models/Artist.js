const { Schema, model } = require("mongoose");

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    songs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

artistSchema.virtual("songCount").get(function () {
  return this.songs.length;
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
