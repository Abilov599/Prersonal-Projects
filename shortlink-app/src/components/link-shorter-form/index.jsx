import React from "react";
import "./index.scss";

const Shortly = () => {
  return (
    <div id="shortly">
      <form action="">
        <input placeholder="Shorten a link here..." type="text" />
        <button id="shorten-it" type="submit">Shorten It!</button>
      </form>
    </div>
  );
};

export default Shortly;
