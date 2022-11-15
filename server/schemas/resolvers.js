const { Parser } = require("graphql/language/parser");
const { models } = require("mongoose");
const { Artist, Song, Album, Midi } = require("../models");
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
    song: async (parent, { artist_name }) => {
      return Song.find({ artist_name });
    },
    artistAndProgression: async (parent, { artist_name, progression }) => {
      return Song.find({ artist_name, progression });
    },

    referenceSongs: async (parent, { artist_name, progression }) => {
      return Song.find({ artist_name, progression });
    },

    albums: async () => {
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
    album: async (parent, { artist_name }) => {
      return Album.find({ artist_name }).populate({
        path: "songs",
      });
    },

    midi: async (parent, {}) => {
      return Midi.find();
    },
  },
  Mutation: {
    addArtist: async (parent, args) => {
      const artist = await Artist.create(args);
    },
  },
};

module.exports = resolvers;
