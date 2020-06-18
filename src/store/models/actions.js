import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const LOADED_MODELS = "LOADED_MODELS";

const loadModelsSucces = (model) => {
  //   console.log(model);
  return { type: LOADED_MODELS, payload: model };
};

export const loadModels = (modelUrl) => async (dispatch, getState) => {
  try {
    await new GLTFLoader().load(modelUrl, (model) =>
      dispatch(loadModelsSucces(model.scene))
    );
  } catch (error) {
    console.log(error);
  }
};
