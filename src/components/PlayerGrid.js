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
  setPlayerIndex,
  setShowPlayerModal,
  showAdvancedSearch,
}) => {
  if (players.length === 0) {
    setShowPlayerChoices(false);
  }
  return (
    <div className="flex w-full justify-between pl-20 mb-2">
      {showPlayerChoices ? (
        <div className="grid grid-cols-5 gap-x-2 gap-y-4 p-2 mt-10 w-4/5">
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
        <div className="grid grid-cols-6 gap-2 p-2 mt-6 ml-48 w-4/5"></div>
      )}
      {searchTerm !== "" && !showAdvancedSearch && (
        <div className=" mt-6 mx-4 ">
          <SearchCode operator={operator} searchTerm={searchTerm} />
        </div>
      )}
    </div>
  );
};

export default PlayerGrid;
