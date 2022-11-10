const { Parser } = require("graphql/language/parser");
const { models } = require("mongoose");
const { Artist, Song, Album } = require("../models");
const resolvers = {
  Query: {
    artists: async () => {
      return Artist.find().populate({
        path: "albums",
        populate: {
          path: "artist",
          model: "Artist",
        },
      });
    },
    artist: async (parent, { name }) => {
      return Artist.findOne({ name })
        .populate({
          path: "albums",
          populate: {
            path: "artist",
            model: "Artist",
          },
        })
        .populate({
          path: "albums",
          populate: {
            path: "songs",
            model: "Song",
          },
        });
    },
    songs: async () => {
      return Song.find().populate("artist");
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
      return Album.find()
        .populate({
          path: "artist",
          populate: {
            path: "albums",
            model: "Album",
          },
        })
        .populate({
          path: "songs",
        });
    },
  },
  Mutation: {
    addArtist: async (parent, args) => {
      const artist = await Artist.create(args);
    },
  },
};

module.exports = resolvers;
