import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.scss";

const Shortly = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div id="shortly">
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Shorten a link here..."
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button id="shorten-it" type="submit">
          Shorten It!
        </button>
      </form>
      <div className="mt-5">
        {shortenedLink}
        <button className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md">
          Copy URL to Clipboard
        </button>
      </div>
    </div>
  );
};

export default Shortly;
