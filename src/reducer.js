function reducer(state, action) {
  switch (action.type) {
    case "INITIATE_FETCH":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        stories: action.payload.data,
        nbPages: action.payload.nbPages,
      };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, isError: true };
    case "HANDLE_SEARCHTERM":
      return { ...state, searchTerm: action.payload, category: "search" };
    case "HANDLE_SEARCH":
      return { ...state, page: 0 };
    case "HANDLE_PAGE":
      let newPage;
      if (action.payload === "Prev") {
        newPage = state.page - 1;
        if (newPage < 0) {
          newPage = state.nbPages - 1;
        }
      }
      if (action.payload === "Next") {
        newPage = state.page + 1;
        if (newPage > state.nbPages - 1) {
          newPage = 0;
        }
      }
      return { ...state, page: newPage };
    case "HANDLE_DARK_MODE":
      const newDarkMode = !state.darkMode;
      return { ...state, darkMode: newDarkMode };

    default:
      throw new Error("No matching action type found");
  }
}

export default reducer;
