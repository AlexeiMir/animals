import {combineReducers} from "redux";
import { catsReducer } from "./ducks/cats/reducer";


export const rootReducer = combineReducers({
    cats: catsReducer
})