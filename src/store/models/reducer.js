import { LOADED_MODELS, REMOVE_MODEL } from "./actions";

const initialState = {
  availableModels: [
    {
      id: 1,
      name: "Prodent Toothpaste",
      category: "Health",
      thumbnail: "models/TANDPASTA-PRODENT-ID001_THUMNAIL-library.jpg",
      obj: {
        url: "models/TANDPASTA-PRODENT-ROUNDED-001_v1.gltf",
        mesh: [
          {
            material: "TANDPASTA-PRODENT-001_TEX",
            geometry: "Circle_0",
          },
          {
            material: "TANDPASTA-PRODENT-001_BASE",
            geometry: "Circle_1",
          },
        ],
      },
    },
    {
      id: 10,
      name: "Placeholder Toothpaste",
      category: "Health",
      thumbnail: "models/TANDPASTA_-ODOL-B_delete_THUMNAIL-library.jpg",
      obj: {
        url: "models/TOOTHPASTE_Placeholder_TrueScale_v1.gltf",
        mesh: [
          {
            material: "ToothPaste Dop",
            geometry: "Circle_0",
          },
          {
            material: `ToothPaste_TexBody`,
            geometry: "Circle_1",
          },
        ],
      },
    },
  ],
  loadedModels: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_MODEL: {
      const newModels = state.loadedModels.filter(
        (model, index) => index !== payload
      );

      return { ...state, loadedModels: [...newModels] };
    }
    case LOADED_MODELS:
      return { ...state, loadedModels: [...state.loadedModels, payload] };
    default:
      return state;
  }
};
