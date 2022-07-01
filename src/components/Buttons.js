import React, { useContext } from "react";
import { SiteContext } from "../context";

function Buttons() {
  const { page, nbPages, handlePages } = useContext(SiteContext);

  return (
    <div>
      <button type="button" onClick={handlePages}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button type="button" onClick={handlePages}>
        Next
      </button>
    </div>
  );
}

export default Buttons;
