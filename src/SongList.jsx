import React, { useState } from "react";

// default list of Songs. 

const SongList = () => {
  const [songs, setSongs] = useState([
    { id: 1, songname: "Bohemian Rhapsody", album: "A Night at the Opera", band: "Queen" },
    { id: 2, songname: "Hotel California", album: "Hotel California", band: "Eagles" },
    { id: 3, songname: "Stairway to Heaven", album: "Led Zeppelin IV", band: "Led Zeppelin" },
  ]);

//adds new songs to Playlist
  const [newSong, setNewSong] = useState({
    id: "",
    songname: "",
    album: "",
    band: "",
  });

  const [editSong, setEditSong] = useState(null);

  //Function to add songs to Array of handleAddSong
  const handleAddSong = () => {
    if (newSong.id && newSong.songname && newSong.album && newSong.band) {
      setSongs([...songs, newSong]);
      setNewSong({ id: "", songname: "", album: "", band: "" }); // Clears input fields
    }
  };

  //removes songs from list. 
  const handleRemoveSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  //creates container for song data in table. Removes, adds, Edits the songs, album, and band names. 
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Playlist</h1>
  
      <table className="table table-striped">
        <thead>
          <tr>
        <th>ID</th>
        <th>Song Name</th>
        <th>Album</th>
        <th>Band</th>
        <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.id}</td>
              <td>{song.songname}</td>
              <td>{song.album}</td>
              <td>{song.band}</td>
              <td>
                <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => setEditSong(song)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveSong(song.id)}
                >
                    Remove
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add a Song</h3>
      <div className="mb-3">

<input
  type="number"
  placeholder="ID"
  className="form-control mb-2"
  value={editSong ? editSong.id : newSong.id}
  onChange={(e) => {
    if (editSong) {
      setEditSong({ ...editSong, id: parseInt(e.target.value, 10) });
    } else {
      setNewSong({ ...newSong, id: parseInt(e.target.value, 10) });
    }
  }}
/>
<input
  type="text"
  placeholder="Song Name"
  className="form-control mb-2"
  value={editSong ? editSong.songname : newSong.songname}
  onChange={(e) => {
    if (editSong) {
      setEditSong({ ...editSong, songname: e.target.value });
    } else {
      setNewSong({ ...newSong, songname: e.target.value });
    }
  }}
/>
        <input
          type="text"
          placeholder="Album"
          className="form-control mb-2"
          value={editSong ? editSong.albumname : newSong.album}
          onChange={(e) => {
            if (editSong) {
                setEditSong({ ...editSong, album: e.target.value });
            } else {
                setNewSong({ ...newSong, album: e.target.value });
            }    
        }}
        />

        <input
          type="text"
          placeholder="Band"
          className="form-control mb-2"
          value={editSong ? editSong.bandname : newSong.band}
          onChange={(e) =>  {
            if (editSong) {
                setEditSong({ ...editSong, band: e.target.value });
            } else {
                setNewSong({ ...newSong, band: e.target.value });
            }
            }
          }
       
        />

<button
  className="btn btn-primary"
  onClick={() => {
    if (editSong) {
      setSongs(
        songs.map((song) =>
          song.id === editSong.id ? editSong : song
        )
      );
      setEditSong(null); // Clears the editing state
    } else {
      handleAddSong();
    }
  }}
>
  {editSong ? "Update Song" : "Add Song"}
</button>
{editSong && (
  <button
    className="btn btn-secondary"
    onClick={() => setEditSong(null)}
  >
    Cancel
  </button>
)}
{/* buttons change for edit or Update uption to add or update a Song */}

      </div>
    </div>
  );
}; 
//runs all ID data for SongList.  
// then exports SongList for APP to use. 

export default SongList;
