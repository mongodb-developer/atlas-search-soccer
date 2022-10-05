import React from "react";
import Selector from "./Selector";
import SearchIcon from "../images/Search.png";
import AutoSuggestions from "./AutoSuggestions";
import Scoreboard from "../images/scoreboard.png";
import Reset from "../images/RESET.png";

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
  setDisplayedPlayer,
  setShowPlayerModal,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex w-full items-center relative ">
      <form
        className=" flex w-3/4 space-x-8 mx-8 items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" border border-gray-700 w-3/4 px-6 py-2 text-2xl rounded-lg outline-none "
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

        <button
          className={`flex flex-col text-white hover:scale-110 active:scale-125 justify-items-center mx-4  ${
            !functionScore
              ? " border-green-700 shadow shadow-mongo border"
              : "border-slate-800  border-2 shadow shadow-green-500/50 "
          } w-1/10 space-x-2 rounded-lg  p-2 `}
          onClick={(e) => {
            setFunctionScore(!functionScore);

            handleSubmit(e);
          }}
        >
          <div className="text-center mx-auto">Function Score</div>
          <img
            src={Scoreboard}
            alt="advanced search"
            className="rounded-lg w-60 mx-auto"
          ></img>
        </button>
      </form>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 w-1/4"
      >
        {" "}
        <img src={Reset} alt="reset" className="rounded-lg w-16 "></img>
      </button>
      {showAutocompletePlayers && (
        <div className="absolute top-28 left-10  z-10  bg-white rounded shadow-2xl">
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
            setDisplayedPlayer={setDisplayedPlayer}
            setShowPlayerModal={setShowPlayerModal}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
