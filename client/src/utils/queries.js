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
