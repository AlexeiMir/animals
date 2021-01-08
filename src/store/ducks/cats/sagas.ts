import {call, put, takeLatest} from 'redux-saga/effects'
import {catApi} from '../../../api/catApi'
import {actions} from './actionCreators'
import {CatsActionsType} from './actionTypes'
import {LoadingStatus} from './state'



export function* fetchCatsRequest({currentPage, totalCatsCount}:
                                      ReturnType<typeof actions.fetchCats>) {
    try {
        yield put(actions.setCatsLoadingStatus(LoadingStatus.LOADING))
        yield put(actions.setCurrentPage(currentPage))
        yield put(actions.setTotalCatsCount(totalCatsCount))
        const items = yield call(catApi.getCats,currentPage, totalCatsCount)
        yield put(actions.setCatsLoadingStatus(LoadingStatus.LOADED))
        yield put(actions.setCats(items))
    } catch (error) {
        yield put(actions.setCatsLoadingStatus(LoadingStatus.ERROR))
    }
}

export function* catsSaga() {
    yield takeLatest(CatsActionsType.FETCH_CATS, fetchCatsRequest)
}