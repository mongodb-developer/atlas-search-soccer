import React from "react";

const AutoSuggestions = ({
  setSearchTerm,
  searchTerm,
  position2Fill,
  addPlayerToTeam,
  setSubmitted,
  players,
  setOperator,
  setShowAutocompletePlayers,
}) => {
  return (
    <div className="container flex ml-8 w-96">
      <div className="flex flex-col">
        {players.length > 0 &&
          players.map((player) => {
            return (
              <div className="flex py-2 border-b-1 border-slate-500">
                <img
                  src={player?.player_face_url}
                  alt="player-face"
                  className="rounded-full mt-1  text-left w-16 border border-slate-500 shadow-2xl"
                ></img>
                <div
                  className="pl-8 my-4 border-b border-gray-300 w-auto text-lg"
                  key={player._id}
                  onClick={(e) => {
                    setShowAutocompletePlayers(false);
                    setSearchTerm("");
                    addPlayerToTeam(player, position2Fill);
                    setSubmitted(true);
                  }}
                >
                  {player.long_name}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AutoSuggestions;
