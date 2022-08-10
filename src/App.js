import { useContext } from "react";
import { SiteContext } from "./context";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";
import Buttons from "./components/Buttons";
import DarkModeToggle from "./components/DarkModeToggle";
import DarkModeMenu from "./components/DarkModeMenu";

function App() {
  const { isLoading, category } = useContext(SiteContext);

  return (
    <main>
      <h1>Hacker News</h1>
      <hr />
      <DarkModeToggle />
      <DarkModeMenu />
      <SearchForm />
      {isLoading && <h2>Loading stories...</h2>}
      {!isLoading && <Stories />}
      {!isLoading && category === "search" && <Buttons />}
    </main>
  );
}

export default App;
