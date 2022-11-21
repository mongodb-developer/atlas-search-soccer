import React from "react";
import PlayerCard from "./PlayerCard";

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
  setShowPlayerModal,
  showAdvancedSearch,
  functionScore,
  setDisplayedPlayer,
}) => {
  return (
    <div className="flex w-full justify-between mb-2">
      {showPlayerChoices ? (
        <div className="grid grid-cols-5 gap-x-2 gap-y-4 p-2 mt-10 w-4/5 mx-auto">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              parent="PlayerGrid"
              addPlayerToTeam={addPlayerToTeam}
              position2Fill={position2Fill}
              setPosition2Fill={setPosition2Fill}
              dreamTeam={dreamTeam}
              dreamNames={dreamNames}
              setShowPlayerModal={setShowPlayerModal}
              setDisplayedPlayer={setDisplayedPlayer} // displayedPlayer
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-6 gap-2 p-2 mt-6 mx-auto w-4/5"></div>
      )}
      {/*searchTerm !== "" && !showAdvancedSearch && (
        <div className=" mt-6 mx-4 ">
          <SearchCode
            operator={operator}
            searchTerm={searchTerm}
            functionScore={functionScore}
          />
        </div>
      )*/}
    </div>
  );
};

export default PlayerGrid;
