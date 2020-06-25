import { CHANGE_LIGHTS } from "./actions";

const initialState = {
  environment: {
    all: [
      "/models/studio/industrial_pipe_and_valve_01_2k.hdr",
      "/models/studio/lakeside_2k.hdr",
      "/models/studio/photo_studio_01_2k.hdr",
      "/models/studio/studio_small_05_2k.hdr",
      "/models/studio/studio010.hdr",
    ],
    active: "/models/studio/studio010.hdr",
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LIGHTS:
      return {
        ...state,
        environment: { ...state.environment, active: payload },
      };
    default:
      return state;
  }
};
