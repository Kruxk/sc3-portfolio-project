export const CHANGE_LIGHTS = "CHANGE_LIGHTS";
export const EXPORT = "EXPORT";

export const changeLight = (env) => {
  return { type: CHANGE_LIGHTS, payload: env };
};

export const saveScene = (trigger) => {
  return { type: EXPORT, payload: trigger };
};
