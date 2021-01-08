import produce, {Draft} from "immer"
import {ActionsTypes, CatsActionsType} from "./actionTypes"
import {CatsState, LoadingStatus} from "./state"

const initialCatsState: CatsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER,
    pageSize: 10,
    currentPage: 1,
    totalCatsCount: 0
}


export const catsReducer = produce(
    (draft: Draft<CatsState>, action: ActionsTypes) => {
        switch (action.type) {
            case CatsActionsType.SET_CATS:
                draft.items = action.cats
                draft.LoadingStatus = LoadingStatus.LOADED
                break
            case CatsActionsType.FETCH_CATS:
                draft.LoadingStatus = LoadingStatus.LOADING
                break
            case CatsActionsType.SET_TOTAL_CATS_COUNT:
                draft.totalCatsCount= action.payload
                break
            case CatsActionsType.SET_CURRENT_PAGE:
                draft.currentPage = action.payload
                break
            default:
                break
        }

    }, initialCatsState)