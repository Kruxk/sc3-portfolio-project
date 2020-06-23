import { CAMERA_POSITION } from "./actions";

const initialState = {
  camera: { position: [0, 0.8, 1] },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CAMERA_POSITION: {
      console.log(payload);
      return { ...state, camera: { ...state.camera, position: [...payload] } };
    }
    default:
      return state;
  }
};
