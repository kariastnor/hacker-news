import { useContext } from "react";
import { SiteContext } from "./context";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import Buttons from "./components/Buttons";

function App() {
  const { isLoading, category, handleDarkMode } = useContext(SiteContext);

  if (isLoading) {
    return <h2>Loading stories...</h2>;
  }

  return (
    <main>
      <h1>Hacker News</h1>
      <p>Dark mode:</p>
      <label class="switch">
        <input onClick={handleDarkMode} type="checkbox" />
        <span class="slider round"></span>
      </label>
      <SearchForm />
      <Stories />
      {category === "search" && <Buttons />}
    </main>
  );
}

export default App;
