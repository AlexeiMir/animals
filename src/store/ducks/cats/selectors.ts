import { RootState } from "../../store";
import {Cat, CatsState, LoadingStatus} from "./state";


export const selectCatsState = (state: RootState): CatsState => state.cats

export const selectCatsItems = (state: RootState): Cat[] => selectCatsState(state).items

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
    selectCatsState(state).LoadingStatus

export const selectIsCatsLoading = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADING

export const getCurrentPage = (state: RootState) => selectCatsState(state).currentPage

export const getPageSize = (state: RootState) => selectCatsState(state).pageSize

export const getTotalCatsCount = (state: RootState) => selectCatsState(state).items.length




