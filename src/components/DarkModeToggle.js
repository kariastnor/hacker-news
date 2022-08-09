import { useContext } from "react";
import { SiteContext } from "../context";

function DarkModeToggle() {
  const { handleDarkMode } = useContext(SiteContext);

  return (
    <div className="dark-mode-toggle">
      <p>Dark mode:</p>
      <label className="switch">
        <input onClick={handleDarkMode} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
