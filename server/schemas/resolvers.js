const { Parser } = require("graphql/language/parser");
const { Artist, Song } = require("../models");
const resolvers = {
  Query: {
    artists: async () => {
      return Artist.find().populate({
        path: "songs",
        populate: {
          path: "album",
          model: "Album",
        },
      });
    },
    artist: async (parent, { name }) => {
      return Artist.findOne({ name }).populate({
        path: "songs",
        populate: {
          path: "album",
          model: "Album",
        },
      });
    },
    oneSong: async (parent, { artist_name, progression }) => {
      const params = { artist_name, progression };
      console.log(params);
      return Song.findOne(params).populate("songs");
    },
    randomSong: async (parent, { artist_name, album_name }) => {
      const params = { artist_name, album_name };
      return Album.find(params).populate("songs");
    },
    album: async () => {
      return Album.find();
    },
  },
  Mutation: {
    addArtist: async (parent, args) => {
      const artist = await Artist.create(args);
    },
  },
};

module.exports = resolvers;
