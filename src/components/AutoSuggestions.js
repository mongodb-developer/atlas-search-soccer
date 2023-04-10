import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

const AutoSuggestions = ({
  setSearchTerm,
  position2Fill,
  addPlayerToTeam,
  setSubmitted,
  players,
  setShowAutocompletePlayers,
  setDisplayedPlayer,
  setShowPlayerModal,
}) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowAutocompletePlayers(false);
      }}
    >
      <div className="container flex ml-8 w-full">
        <div className="flex flex-col">
          {players.length > 0 &&
            players.map((player) => {
              return (
                <div
                  className="flex py-2 border-b-1 border-slate-500 w-full"
                  key={player._id}
                  onClick={(e) => {
                    // setShowAutocompletePlayers(false);
                    // setSearchTerm("");
                    // setDisplayedPlayer(player);
                    // addPlayerToTeam(player, position2Fill);
                    // setSubmitted(true);
                    console.log("TO DISPLAY: ", player.short_name);
                  }}
                >
                  <img
                    src={player?.player_face_url}
                    alt="player-face"
                    className="rounded-full mt-1  text-left w-20 h-auto border border-slate-500 shadow-2xl"
                  ></img>
                  <div className="flex border-b border-gray-300 w-full">
                    <div className="pl-8 my-4 w-3/5 text-lg">
                      {player.long_name}
                    </div>
                    <button
                      className="ml-10 text-3xl my-auto"
                      onClick={() => {
                        setDisplayedPlayer(player);
                        console.log("TO DISPLAY: ", player.short_name);
                        setShowPlayerModal(true);
                      }}
                    >
                      🔍
                    </button>
                    <button
                      className="ml-10 text-3xl my-auto "
                      onClick={() => {
                        addPlayerToTeam(player, position2Fill);
                      }}
                    >
                      {" "}
                      💚
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default AutoSuggestions;
