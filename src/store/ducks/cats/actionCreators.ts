import {
    CatsActionsType
} from "./actionTypes";
import {Cat, LoadingStatus} from "./state";



export const actions = {
    setCats: (payload: Cat[]) => ({type: CatsActionsType.SET_CATS, payload}),
    fetchCats: () => ({type: CatsActionsType.FETCH_CATS}),
    setCatsLoadingStatus: (payload: LoadingStatus) => ({type: CatsActionsType.SET_LOADING_STATE,
        payload})
}
