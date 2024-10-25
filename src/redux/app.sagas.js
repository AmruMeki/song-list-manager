import { takeLatest, put, all, call } from 'redux-saga/effects';
import { deleteSongSaga, addSongSaga, updateSongSaga } from './app.actions';

export function* onAddSongSaga({ payload }) {
  yield put(addSongSaga(payload));
}

export function* onDeleteSongSaga({ payload: { id } }) {
  yield put(deleteSongSaga(id));
}

export function* onUpdateSongSaga({ payload }) {
  yield put(updateSongSaga(payload));
}

export function* onDelete() {
  yield takeLatest('DELETE_SONG', onDeleteSongSaga);
}

export function* onAdd() {
  yield takeLatest('ADD_SONG', onAddSongSaga);
}

export function* onUpdate(){
  yield takeLatest("UPDATE_SONG",onUpdateSongSaga)
}


export function* songs() {
  yield all([call(onDelete), call(onAdd) ,call(onUpdate)]);
}
