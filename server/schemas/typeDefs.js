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

  type Midi {
    _id: ID
    progresion: String!
  }

  type Artist {
    _id: ID
    name: String
    albums: [Album]
  }

  type Query {
    artists: [Artist]
    artist(name: String!): Artist

    albums: [Album]
    album(artist_name: String): [Album]

    songs: [Song]
    song(artist_name: String): [Song]
    artistAndProgression(artist_name: String, progression: String!): [Song]

    referenceSongs(artist_name: String, progression: String): [Song]

    midi: [Midi]
  }

  type Mutation {
    addArtist(name: String!): [Artist]
  }
`;

module.exports = typeDefs;
