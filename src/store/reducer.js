import { combineReducers } from "redux";
import modelsReducer from "./models/reducer";
import sceneReducer from "./scene/reducer";

const reducer = combineReducers({
  models: modelsReducer,
  scene: sceneReducer,
});

export default reducer;
