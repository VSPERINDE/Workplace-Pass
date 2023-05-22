import {all} from 'redux-saga/effects';

import workplace from './modules/workplace/sagas';

export default function* rootSaga() {
  return yield all([workplace]);
}
