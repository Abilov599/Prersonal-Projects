import { combineReducers } from "redux";
import { universityReducer } from "./getData.reducer";

export const rootReducer = combineReducers({
  universityReducer,
});
