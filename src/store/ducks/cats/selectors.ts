import { RootState } from "../../store";
import {CatsState, LoadingStatus} from "./state";


export const selectCatsState = (state: RootState): CatsState => state.cats

export const selectCatsItems = (state: RootState) => selectCatsState(state).items

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
    selectCatsState(state).LoadingStatus

export const selectIsCatsLoading = (state: RootState): boolean =>
    selectLoadingStatus(state) === LoadingStatus.LOADING
