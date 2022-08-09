import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

const SiteContext = createContext();

const searchUrl = "https://hn.algolia.com/api/v1/search?tags=story&query=";
const frontPageUrl =
  "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0";

const initialState = {
  isLoading: false,
  isError: false,
  searchTerm: "",
  page: 0,
  category: "frontPage", //vs search
  stories: [],
  nbPages: 0,
  darkMode: false,
  openMenu: false,
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchStories(url) {
    dispatch({ type: "INITIATE_FETCH" });
    try {
      const response = await axios.get(url);
      console.log(response);
      const data = response.data.hits;
      const nbPages = response.data.nbPages;
      dispatch({ type: "FETCH_SUCCESS", payload: { data, nbPages } });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  }

  useEffect(() => {
    fetchStories(frontPageUrl);
  }, []);

  function handleSearchTerm(search) {
    dispatch({ type: "HANDLE_SEARCHTERM", payload: search });
  }

  function handleSearch(event) {
    event.preventDefault();
    dispatch({ type: "HANDLE_SEARCH" });
    if (state.searchTerm) {
      fetchStories(`${searchUrl}${state.searchTerm}`);
    } else {
      fetchStories(frontPageUrl);
    }
  }

  function handlePages(event) {
    const type = event.target.textContent;
    dispatch({ type: "HANDLE_PAGE", payload: type });
  }

  useEffect(() => {
    if (state.searchTerm) {
      fetchStories(`${searchUrl}${state.searchTerm}&page=${state.page}`);
    } else {
      fetchStories(frontPageUrl);
    }
    // eslint-disable-next-line
  }, [state.page]);

  function handleDarkMode() {
    dispatch({ type: "HANDLE_DARK_MODE" });
  }

  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.className = "dark-mode";
    } else {
      document.documentElement.className = "light-mode";
    }
  }, [state.darkMode]);

  function openDarkModeMenu() {
    dispatch({ type: "HANDLE_MENU" });
  }

  return (
    <SiteContext.Provider
      value={{
        ...state,
        handleSearchTerm,
        handleSearch,
        handlePages,
        handleDarkMode,
        openDarkModeMenu,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export { AppProvider, SiteContext };
