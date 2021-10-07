import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { dataReducer } from "./dataReducer";
import { suggestionReducer } from "./suggestionReducer";


export const rootReducer = combineReducers({ user: userReducer, data: dataReducer, suggestion: suggestionReducer })