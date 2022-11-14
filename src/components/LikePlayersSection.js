import React from "react";
import LikePlayerCard from "./LikePlayerCard";

const LikePlayersSection = ({ players }) => {
  return (
    <div className="flex flex-col w-1/4  bg-gray-900 items-center ">
      <div className="font-bold text-2xl text-green-500 my-4">
        More Players Like This
      </div>
      <div className="flex flex-col justify-center divide-y divide-solid">
        {players?.map((player, index) => (
          <LikePlayerCard key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default LikePlayersSection;
