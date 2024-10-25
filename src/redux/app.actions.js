export const addSong = (song) => ({ type: 'ADD_SONG', payload: song });
export const deleteSong = (id) => ({ type: 'DELETE_SONG', payload: id });
export const updateSong = (song) => ({ type: 'UPDATE_SONG', payload: song });
export const addSongSaga = (song) => ({ type: 'ADD_SONG_SAGA', payload: song });
export const deleteSongSaga = (song) => ({
  type: 'DELETE_SONG_SAGA',
  payload: song,
});
export const updateSongSaga = (song) => ({
  type: 'UPDATE_SONG_SAGA',
  payload: song,
});
