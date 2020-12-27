import { all } from 'redux-saga/effects'
import { catsSaga } from './ducks/cats/sagas'

export default function* rootSaga() {
    yield all([catsSaga])

}