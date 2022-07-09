import React from "react";
import SadSoccerPlayer from "../images/SadSoccerPlayer.jpg";

const NoPlayersFound = () => {
  return (
    <div className="bg-opacity-80 flex justify-center w-2/5 mx-auto rounded border border-gray-800 text-center text-white shadow-xl p-6 bg-mongo-600 border-solid ">
      <img
        src={SadSoccerPlayer}
        alt="player"
        className="object-contain w-3/5 rounded-lg my-auto"
      />
      <div className="flex flex-col">
        <div className="text-lg my-auto">
          No players found. <br></br>
          <br></br>Try changing your search parameters.
        </div>
        <div className="text-6xl">⚽</div>
      </div>
    </div>
  );
};

export default NoPlayersFound;
