const initialState = {
  availableModels: [
    {
      id: 1,
      category: "Health",
      modelUrl: "/TANDPASTA-PRODENT-ROUNDED-001_v1.glb",
      thumbnail: "/TANDPASTA-PRODENT-ID001_THUMBNAIL-library.png",
    },
    {
      id: 2,
      category: "Health",
      modelUrl: "/TOOTHPASTE_Placeholder_TrueScale_v1.gltf",
      thumbnail: "N/A",
    },
  ],
  loadedModels: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
