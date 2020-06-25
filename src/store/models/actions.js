export const LOADED_MODELS = "LOADED_MODELS";
export const EDIT_POSITION = "EDIT_POSITION";
export const REMOVE_MODEL = "REMOVE_MODEL";

export const loadModels = (model) => {
  //   console.log(model);
  return { type: LOADED_MODELS, payload: model };
};

export const removeModel = (index) => {
  return { type: REMOVE_MODEL, payload: index };
};

export const editPosition = (id, position) => {
  return { type: EDIT_POSITION, payload: { id, position } };
};
