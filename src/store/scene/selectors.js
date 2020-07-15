export const selectActiveEnv = (state) => {
  return state.scene.environment.active;
};

export const selectPresets = (state) => {
  return state.scene.environment.all;
};

export const selectExport = (state) => state.scene.export;
