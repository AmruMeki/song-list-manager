import songs from './data';
const appReducer = (state = songs, action) => {
  let newSongs;
  switch (action.type) {
    case 'ADD_SONG_SAGA':
      newSongs = [...state];
      newSongs.push(action.payload);
      return newSongs;
    case 'DELETE_SONG_SAGA':
      newSongs = [...state];
      newSongs = newSongs.filter((song) => song.id !== action.payload);
      return newSongs;
    case 'UPDATE_SONG_SAGA':
      newSongs = [...state];
      let index = -1;
      for (let i = 0; i < newSongs.length; i++) {
        index++;
        if (newSongs[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newSongs[index] = action.payload;
      }
      return newSongs;
    default:
      return state;
  }
};
export default appReducer;
