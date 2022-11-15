import { gql } from "@apollo/client";

export const ARTISTS = gql`
  query artists {
    artists {
      _id
      name
      albums {
        _id
        album_name
      }
    }
  }
`;

export const SINGLE_ARTIST = gql`
  query Artist($name: String!) {
    artist(name: $name) {
      _id
      name
      albums {
        _id
        album_name
        songs {
          album_name
          song_name
        }
        artist {
          name
          _id
        }
      }
    }
  }
`;

export const SINGLE_SONG = gql`
  query Song($artistName: String) {
    song(artist_name: $artistName) {
      song_name
      key
      progression
      tempo
    }
  }
`;

export const REFERENCE_SONGS = gql`
  query ReferenceSongs($artistName: String, $progression: String) {
    referenceSongs(artist_name: $artistName, progression: $progression) {
      song_name
      album_name
      artist_name
    }
  }
`;

export const ARTIST_AND_PROGRESSION = gql`
  query ArtistAndProgression($progression: String!, $artistName: String) {
    artistAndProgression(progression: $progression, artist_name: $artistName) {
      song_name
      progression
    }
  }
`;
