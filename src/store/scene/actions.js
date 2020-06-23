export const CAMERA_POSITION = "CAMERA_POSITION";

export const setCamera = (position) => {
  //   console.log(position);
  return { type: CAMERA_POSITION, payload: position };
};
