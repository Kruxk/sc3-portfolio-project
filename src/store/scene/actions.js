export const CHANGE_LIGHTS = "CHANGE_LIGHTS";

export const changeLight = (env) => {
  return { type: CHANGE_LIGHTS, payload: env };
};
