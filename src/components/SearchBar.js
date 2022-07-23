import React from "react";
import Selector from "./Selector";
import SearchIcon from "../images/Search.png";
import AutoSuggestions from "./AutoSuggestions";
import Calculator from "../images/calculator.png";

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
  setPlayersFound,
  functionScore,
  setFunctionScore,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMITTING!!!");
    setSubmitted(true);
  };

  return (
    <div className="relative w-full items-center mr-12">
      <form
        className=" flex w-4/5 mx-auto items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" border border-gray-700 w-4/5 px-6 py-2 text-2xl rounded-lg outline-none"
          placeholder="type to find players..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        <Selector setOperator={setOperator} />
        <button type="submit">
          <img
            className="mx-auto w-24 text-white mb-2 z-10 content-image text-2xl"
            src={SearchIcon}
            alt="search"
            onClick={handleSubmit}
          />
        </button>
        <div
          className="flex ml-12  text-white w-1/10 space-x-2 border rounded-lg border-slate-700 shadow shadow-green-500/50 p-2"
          onClick={
            () => {
              setFunctionScore(!functionScore);
              console.log(functionScore);
            }
            // setSubmitted
          }
        >
          {" "}
          <div className="text-center my-auto">Function Score</div>
          <img
            src={Calculator}
            alt="advanced search"
            className="rounded-lg w-16 "
          ></img>
        </div>
      </form>
      {showAutocompletePlayers && (
        <div className="absolute top-20 left-80 z-10  text-left w-2/5 bg-white rounded shadow-2xl">
          <AutoSuggestions
            setSearchTerm={setSearchTerm}
            addPlayerToTeam={addPlayerToTeam}
            searchTerm={searchTerm}
            setSubmitted={setSubmitted}
            players={players}
            setShowAutocompletePlayers={setShowAutocompletePlayers}
            setOperator={setOperator}
            position2Fill={position2Fill}
            setPlayersFound={setPlayersFound}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
