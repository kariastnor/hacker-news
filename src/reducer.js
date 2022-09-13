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
      return { ...state, searchTerm: action.payload };
    case "HANDLE_SEARCH":
      if (state.searchTerm) {
        return { ...state, page: 0, category: "search" };
      } else {
        return { ...state, page: 0, category: "frontPage" };
      }
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
    case "CHANGE_SORTING":
      return { ...state, sorting: action.payload };
    case "CHANGE_URL":
      if (state.sorting === "relevance") {
        return {
          ...state,
          searchUrl: "https://hn.algolia.com/api/v1/search?tags=story&query=",
        };
      } else {
        return {
          ...state,
          searchUrl:
            "https://hn.algolia.com/api/v1/search_by_date?tags=story&query=",
        };
      }
    case "HANDLE_DARK_MODE":
      const newDarkMode = !state.darkMode;
      return { ...state, darkMode: newDarkMode, openMenu: false };
    case "HANDLE_MENU":
      const newState = !state.openMenu;
      return { ...state, openMenu: newState };

    default:
      throw new Error("No matching action type found");
  }
}

export default reducer;
