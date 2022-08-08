import { useContext } from "react";
import { SiteContext } from "./context";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import Buttons from "./components/Buttons";

function App() {
  const { isLoading, category, handleDarkMode } = useContext(SiteContext);

  return (
    <main>
      <h1>Hacker News</h1>
      <hr />
      <div className="dark-mode-toggle">
        <p>Dark mode:</p>
        <label className="switch">
          <input onClick={handleDarkMode} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <SearchForm />
      {isLoading && <h2>Loading stories...</h2>}
      {!isLoading && <Stories />}
      {!isLoading && category === "search" && <Buttons />}
    </main>
  );
}

export default App;
