export const LOADED_MODELS = "LOADED_MODELS";
export const EDIT_POSITION = "EDIT_POSITION";

export const loadModels = (model) => {
  //   console.log(model);
  return { type: LOADED_MODELS, payload: model };
};

export const editPosition = (id, position) => {
  return { type: EDIT_POSITION, payload: { id, position } };
};
