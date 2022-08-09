import { useContext } from "react";
import { SiteContext } from "../context";
import { IoMenuOutline, IoCheckmarkSharp } from "react-icons/io5";

function DarkModeMenu() {
  const { openMenu, darkMode, handleDarkMode, openDarkModeMenu } =
    useContext(SiteContext);

  return (
    <div className={openMenu ? "dark-mode-menu open" : "dark-mode-menu"}>
      <button type="button" onClick={openDarkModeMenu}>
        <IoMenuOutline />
      </button>
      {openMenu && (
        <div className="drop-down-list">
          <p onClick={handleDarkMode}>
            {darkMode && <IoCheckmarkSharp />}
            <span>Dark Mode</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default DarkModeMenu;
