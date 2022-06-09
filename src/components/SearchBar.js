import React from "react";
import Selector from "./Selector";
import SearchIcon from "../images/Search.png";
import AutoSuggestions from "./AutoSuggestions";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  addPlayerToTeam,
  setOperator,
  setSubmitted,
  players,
  showAutocompletePlayers,
  setShowAutocompletePlayers,
  position2Fill,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMITTING!!!");

    setSubmitted(true);
  };

  return (
    <div className=" w-full items-center">
      <form className="flex w-3/5 mx-auto items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="relative border border-gray-700 w-4/5 px-6 py-2 text-2xl rounded-lg outline-none"
          placeholder="type to find players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <Selector setOperator={setOperator} />
        <button type="submit">
          <img
            className="mx-auto w-20 text-white mb-2 z-10 content-image text-2xl"
            src={SearchIcon}
            alt="search"
            onClick={handleSubmit}
          />
        </button>
      </form>
      {showAutocompletePlayers && (
        <div className="absolute top-1/2 right-48 z-10  text-left w-2/5 bg-white rounded shadow-2xl">
          <AutoSuggestions
            setSearchTerm={setSearchTerm}
            addPlayerToTeam={addPlayerToTeam}
            searchTerm={searchTerm}
            setSubmitted={setSubmitted}
            players={players}
            setShowAutocompletePlayers={setShowAutocompletePlayers}
            setOperator={setOperator}
            position2Fill={position2Fill}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
