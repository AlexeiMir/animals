/* eslint-disable */
import {actions}  from './actionCreators';



export enum CatsActionsType {
    SET_CATS = 'cats/SET_CATS',
    FETCH_CATS = 'cats/FETCH_CATS',
    SET_LOADING_STATE = 'cats/SET_LOADING_STATE',
    SET_CURRENT_PAGE = 'cats/SET_CURRENT_PAGE',
    SET_TOTAL_CATS_COUNT = 'cats/SET_CURRENT_PAGE',
};


type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>

