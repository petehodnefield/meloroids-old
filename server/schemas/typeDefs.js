const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Album {
    _id: ID
    album_name: String!
    artist_name: String!
    artist: [Artist]
    songs: [Song]!
  }

  type Song {
    _id: ID
    song_name: String!
    progression: String!
    artist_name: String
    album_name: String
    key: String!
    tempo: String!
    artist: [Artist]
    albums: [Album]
  }

  type Artist {
    _id: ID
    name: String
    albums: [Album]
  }

  type Query {
    artists: [Artist]
    artist(name: String!): Artist
    oneSong(artist_name: String!, progression: String!): Song
    randomSong(artist_name: String!, album_name: String!): [Album]
    album: [Album]
    songs: [Song]
  }

  type Mutation {
    addArtist(name: String!): [Artist]
  }
`;

module.exports = typeDefs;
