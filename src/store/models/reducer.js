import { LOADED_MODELS, REMOVE_MODEL } from "./actions";

const initialState = {
  availableModels: [
    {
      id: 1,
      name: "Toothpaste 1",
      category: "Health",
      thumbnail: "models/TANDPASTA-PRODENT-ID001_THUMNAIL-library.jpg",
      url: "models/TANDPASTA-PRODENT-ROUNDED-001_v1.gltf",
    },
    {
      id: 2,
      name: "Toothpaste 2",
      category: "Health",
      thumbnail: "models/TANDPASTA_-ODOL-B_delete_THUMNAIL-library.jpg",
      url: "models/TOOTHPASTE_Placeholder_TrueScale_v1.gltf",
    },
    {
      id: 9,
      name: "Toothpaste 3",
      category: "Health",
      thumbnail: "models/TANDPASTA-AQUAFRESH-ID002_THUMNAIL-library.jpg",
      url: "models/TANDPASTA-AQUAFRESH-002_v1.gltf",
    },
    {
      id: 10,
      name: "Toothpaste 4",
      category: "Health",
      thumbnail: "models/TANDPASTA-TURBOSQUID-ID003_thumbnail.jpg",
      url: "models/TANDPASTA-TURBOSQUID-ID003_v1.gltf",
    },
    {
      id: 3,
      name: "Creme 1",
      category: "Health",
      thumbnail: "models/CREME-TURBOSQUID-ID001_thumbnail.jpg",
      url: "models/CREME-TURBOSQUID-ID001_v1.gltf",
    },
    {
      id: 4,
      name: "Creme 2",
      category: "Health",
      thumbnail: "models/CREME-TURBOSQUID-ID002_thumbnail.jpg",
      url: "models/CREME-TURBOSQUID-ID002_v1.gltf",
    },
    {
      id: 5,
      name: "Soap 1",
      category: "Health",
      thumbnail: "models/SOAP-TURBOSQUID-ID001_thumbnail.jpg",
      url: "models/SOAP-TURBOSQUID-ID001_v1.gltf",
    },
    {
      id: 6,
      name: "Soap 2",
      category: "Health",
      thumbnail: "models/SOAP-TURBOSQUID-ID002_thumbnail.jpg",
      url: "models/SOAP-TURBOSQUID-ID002_v1.gltf",
    },
    {
      id: 7,
      name: "Soap 3",
      category: "Health",
      thumbnail: "models/SOAP-TURBOSQUID-ID003_thumbnail.jpg",
      url: "models/SOAP-TURBOSQUID-ID003_v1.gltf",
    },
    {
      id: 8,
      name: "Soap 4",
      category: "Health",
      thumbnail: "models/SOAP-TURBOSQUID-ID004_thumbnail.jpg",
      url: "models/SOAP-TURBOSQUID-ID004_v1.gltf",
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
