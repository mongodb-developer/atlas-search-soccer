import React from "react";
import PlayerCard from "./PlayerCard";

const DreamTeamGrid = ({
  players,

  relegatePlayerFromTeam,
  position2Fill,
  setPosition2Fill,
  setHighlightCard,
  highlightCard,
}) => {
  return (
    <>
      <div className="grid grid-cols-8 gap-x-2 gap-y-8 px-20  pt-8 pb-20 ">
        <div className="col-start-1 col-span-2 px-16 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[8].player}
            spot={8}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-4 col-span-2 px-16 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[9].player}
            spot={9}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-7 col-span-2 px-16 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[10].player}
            spot={10}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-2 col-span-2 px-16 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[5].player}
            spot={5}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-4 col-span-2 px-16 rounded-lg min-5-[32px] ">
          <PlayerCard
            player={players[6].player}
            spot={6}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-6 col-span-2 px-16 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[7].player}
            spot={7}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-1 col-span-2 px-16 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[1].player}
            spot={1}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-3 col-span-2 px-16 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[2].player}
            spot={2}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-5 col-span-2 px-16 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[3].player}
            spot={3}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        <div className="col-start-7 col-span-2 px-16 rounded-lg min-5-[32px]">
          <PlayerCard
            player={players[4].player}
            spot={4}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>

        <div className="col-start-4 col-span-2 px-16 rounded-lg min-5-[32px] mb-20">
          <PlayerCard
            player={players[0].player}
            spot={players[0].spot}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
      </div>
    </>
  );
};

export default DreamTeamGrid;
