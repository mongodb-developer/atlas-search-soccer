import React from "react";

const LikePlayerCard = ({ player }) => {
  return (
    <div className="justify-center  text-center shadow-xl p-1 text-white mt-1 ">
      <div className="mt-2">{player?.short_name}</div>
      <div className="flex justify-evenly mt-2">
        <img src={player?.nation_flag_url} className="w-8 " alt="flag"></img>
        <div>{player?.nationality_name}</div>
        <div>{player?.nation_jersey_number}</div>
      </div>
      <img
        src={player?.player_face_url}
        alt="player-face"
        className="rounded-full mt-1  mx-auto w-12"
      ></img>

      <div className="mb-4">Positions: {player?.player_positions}</div>
      <div className="mb-4">{player?.player_traits}</div>
    </div>
  );
};

export default LikePlayerCard;
