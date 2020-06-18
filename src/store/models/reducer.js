import { LOADED_MODELS } from "./actions";

const initialState = {
  availableModels: [
    {
      id: 1,
      name: "Prodent Toothpaste",
      category: "Health",
      modelUrl: "models/TANDPASTA-PRODENT-ROUNDED-001_v1.glb",
      thumbnail: "models/TANDPASTA-PRODENT-ID001_THUMBNAIL-library.png",
    },
    {
      id: 2,
      name: "Placeholder Toothpaste",
      category: "Health",
      modelUrl: "models/TOOTHPASTE_Placeholder_TrueScale_v1.gltf",
      thumbnail: "N/A",
    },
  ],
  loadedModels: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADED_MODELS:
      // console.log(payload);
      return { ...state, loadedModels: [...state.loadedModels, payload] };
    default:
      return state;
  }
};
