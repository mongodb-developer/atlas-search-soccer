import React from "react";
import LikePlayerCard from "./LikePlayerCard";

const LikePlayersSection = ({ players }) => {
  return (
    <div className="flex flex-col w-1/4  bg-gray-900 items-center overflow-auto ">
      <div className="font-bold text-2xl text-green-500 mt-4">
        More Players Like This
      </div>
      <div className=" text-lg text-yellow-500 my-2">
        based on traits and position
      </div>
      <div className="flex flex-col justify-center divide-y divide-solid border-t border-white">
        {players?.map((player, index) => (
          <LikePlayerCard key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default LikePlayersSection;
