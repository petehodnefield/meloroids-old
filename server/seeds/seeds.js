const db = require("../config/connection");
const { Artist, Song } = require("../models");
const artist_data = require("./data/artist-data");
const album_data = require("./data/album-data");
const song_data = require("./data/song-data");

db.once("open", async () => {
  await Artist.deleteMany();
  await Song.deleteMany();

  // Artist_Seeding
  const artistData = [];
  for (let i = 0; i < artist_data.length; i++) {
    const name = artist_data[i].name;

    artistData.push({ name });
  }
  const createdArtists = await Artist.collection.insertMany(artistData);

  console.log("Artist seeded");

  // song_seeding;
  const songData = [];
  for (let i = 0; i < song_data.length; i++) {
    const { song_name, artist_name, progression, key, tempo } = song_data[i];
    const match = artistData.findIndex((artist) => {
      if (artist.name === song_data[i].artist_name) {
        return true;
      } else {
        return false;
      }
    });
    const { _id: artistId } = artistData[match];
    const createdSongs = await Song.create({
      song_name,
      artist_name,
      progression,
      key,
      tempo,
    });
    const updatedArtist = await Artist.updateOne(
      { _id: artistId },
      { $push: { songs: createdSongs._id } }
    );
    songData.push(createdSongs);
  }

  // Album_Seeding

  for (let i = 0; i < album_data.length; i++) {
    const album_name = album_data[i].album_name;
    const artist_name = album_data[i].artist_name;

    const match = songData.findIndex((song) => {
      if (song.artist_name === artist_name) {
        return true;
      } else {
        return false;
      }
    });

    const { _id: songId } = songData[match];

    const updatedSongs = await Song.updateOne(
      { _id: songId },
      { $push: { album: { album_name, artist_name } } }
    );
  }

  console.log("Album seeded");

  process.exit();
});
