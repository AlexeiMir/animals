import { actions } from './actionCreators';


export enum CatsActionsType {
    SET_CATS = 'cats/SET_CATS',
    FETCH_CATS = 'cats/FETCH_CATS',
    SET_LOADING_STATE = 'cats/SET_LOADING_STATE'
}

type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type ActionsType = InferActionsTypes<typeof actions>

