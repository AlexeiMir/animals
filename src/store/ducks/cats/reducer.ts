import produce, {Draft} from "immer"
import {ActionsType, CatsActionsType} from "./actionTypes"
import {CatsState, LoadingStatus} from "./state"

const initialCatsState: CatsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER
}


export const catsReducer = produce(
    (draft: Draft<CatsState>, action: ActionsType) => {
        switch (action.type) {
            case CatsActionsType.SET_CATS:
                draft.items = action.payload
                draft.LoadingStatus = LoadingStatus.LOADED
                break
            case CatsActionsType.FETCH_CATS:
                draft.LoadingStatus = LoadingStatus.LOADING
                break
            default:
                break
        }

    }, initialCatsState)