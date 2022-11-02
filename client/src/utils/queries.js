import { gql } from "@apollo/client";
export const ONE_SONG = gql`
  query OneSong($artistName: String!, $progression: String!) {
    oneSong(artist_name: $artistName, progression: $progression) {
      _id
      song_name
      artist_name
      progression

      key
    }
  }
`;

export const ARTISTS = gql`
  query artists {
    artists {
      _id
      name
      songs {
        _id
        song_name
      }
    }
  }
`;
