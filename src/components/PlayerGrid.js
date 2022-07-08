import React from "react";
import PlayerCard from "./PlayerCard";
import Tackle from "../images/slide.png";
import SearchCode from "./SearchCode";

const PlayerGrid = ({
  players,
  addPlayerToTeam,
  position2Fill,
  setPosition2Fill,
  dreamTeam,
  dreamNames,
  setShowPlayerChoices,
  showPlayerChoices,
  operator,
  searchTerm,
  setPlayerIndex,
  setShowPlayerModal,
  showAdvancedSearch,
}) => {
  if (players.length === 0) {
    setShowPlayerChoices(false);
  }
  return (
    <div className="flex relative px-10 mb-2 ">
      {/* <img
        src={Tackle}
        alt="tackle"
        className="absolute rounded-lg w-40 object-contain -left-4 -top-12 z-10"
        onClick={() => setShowPlayerChoices(!showPlayerChoices)}
      ></img> */}
      {showPlayerChoices ? (
        <div className="grid grid-cols-5 gap-x-2 gap-y-4 p-2 mt-10 ml-48 w-full">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              index={index}
              player={player}
              parent="PlayerGrid"
              addPlayerToTeam={addPlayerToTeam}
              position2Fill={position2Fill}
              setPosition2Fill={setPosition2Fill}
              dreamTeam={dreamTeam}
              dreamNames={dreamNames}
              setPlayerIndex={setPlayerIndex}
              setShowPlayerModal={setShowPlayerModal}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-2 p-2 mt-6 ml-48 w-full">SAD</div>
      )}
      {searchTerm !== "" && !showAdvancedSearch && (
        <div className="w-2/5 px-8">
          <SearchCode operator={operator} searchTerm={searchTerm} />
        </div>
      )}
    </div>
  );
};

export default PlayerGrid;
