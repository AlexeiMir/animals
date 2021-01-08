import {
    CatsActionsType
} from "./actionTypes";
import {Cat, LoadingStatus} from "./state";



export const actions = {
    setCats: (cats: Cat[]) => ({type: CatsActionsType.SET_CATS, cats}),
    fetchCats: (currentPage: number, totalCatsCount: number) =>
        ({type: CatsActionsType.FETCH_CATS, currentPage, totalCatsCount}),
    setCatsLoadingStatus: (payload: LoadingStatus)=>
        ({type: CatsActionsType.SET_LOADING_STATE, payload}),
    setCurrentPage: (payload: number) =>
        ({type: CatsActionsType.SET_CURRENT_PAGE, payload}),
    setTotalCatsCount: (payload: number) =>
        ({type: CatsActionsType.SET_TOTAL_CATS_COUNT, payload})
}

