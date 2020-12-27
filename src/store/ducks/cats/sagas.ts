import {call, put, takeLatest} from 'redux-saga/effects'
import {catApi} from '../../../api/catApi'
import {actions} from './actionCreators'
import {CatsActionsType} from './actionTypes'
import {LoadingStatus} from './state'


export function* fetchCatsRequest() {
    try {
        const items = yield call(catApi.getCats)
        yield put(actions.setCats(items))
    } catch (error) {
        yield put(actions.setCatsLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* catsSaga() {
    yield takeLatest(CatsActionsType.FETCH_CATS, fetchCatsRequest)
}