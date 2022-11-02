const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Artist {
    _id: ID
    name: String
    songs: [Song]
  }

  type Album {
    _id: ID
    album_name: String!
    artist_name: String!
  }

  type Song {
    _id: ID
    song_name: String!
    artist_name: String!
    progression: String!
    key: String!
    album: [Album]!
  }
  type Query {
    artists: [Artist]
    artist(name: String!): Artist
    oneSong(artist_name: String!, progression: String!): Song
    randomSong(artist_name: String!, album_name: String!): [Album]
    album: [Album]
  }

  type Mutation {
    addArtist(name: String!): [Artist]
  }
`;

module.exports = typeDefs;
