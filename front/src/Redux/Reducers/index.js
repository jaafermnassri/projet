import { combineReducers } from "redux";

import {userReducer} from "./userReducer"
import {foyerReducer} from "./foyerReducers"
import {bookingReducer} from "./bookingReducer"
export const reducers = combineReducers({ userReducer ,foyerReducer,bookingReducer});