// Dependencies
import React, { useState } from "react";
import { useHomeFetch } from "./hooks/useHomeFetch";
import PlayerGrid from "./components/PlayerGrid";

import DreamTeamGrid from "./components/DreamTeamGrid";
import SearchBar from "./components/SearchBar";
import PlayerModal from "./components/PlayerModal";
import AdvancedSearch from "./components/AdvancedSearch";
import SpotSearch from "./images/SpotSearch.png";

const App = () => {
  const [position2Fill, setPosition2Fill] = useState(100);
  const [highlightCard, setHighlightCard] = useState(null);
  const [showPlayerModal, setShowPlayerModal] = useState(false);

  const [playerIndex, setPlayerIndex] = useState(-100);

  const {
    operator,
    setOperator,
    searchTerm,
    setSearchTerm,
    players,
    dreamTeam,
    setShowDreamTeam,
    // setDreamTeam,
    showPlayerChoices,
    setShowPlayerChoices,
    setSubmitted,
    showAutocompletePlayers,
    setShowAutocompletePlayers,
    salary,
    setSalary,
    age,
    setAge,
    overall,
    setOverall,
    skillMoves,
    setSkillMoves,
    defending,
    setDefending,
    dribbling,
    setDribbling,
    pace,
    setPace,
    showAdvancedSearch,
    setShowAdvancedSearch,
    setPositions,
    setCountries,
    setClubs,
    dob,
    setDob,
  } = useHomeFetch();

  //-------------------------------- FUNCTION TO ADDPLAYER --------------------------------------------------------
  const addPlayerToTeam = (player, spot) => {
    console.log("Trying to add player: ", position2Fill);
    console.log("IN ADDING PLAYER FUNCTION:", spot);

    let position = getPosition(spot);

    const data = {
      position2Fill: spot,
      newPlayer: {
        spot: spot,
        position: position,
        player: player,
      },
    };

    const URL_TO_POST_PLAYER =
      "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-xxklh/endpoint/postPlayer";

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(URL_TO_POST_PLAYER, requestOptions).then(() => {
      console.log("SUBMITTED PLAYER!!");
      setHighlightCard(null);
      setShowPlayerChoices(false);
      setShowDreamTeam(true);
      setSearchTerm("");
      setShowAdvancedSearch(false);
    });

    // insert big BLURB here
  };

  //-------------------------------- END FUNCTION TO ADDPLAYER --------------------------------------------------------

  const relegatePlayerFromTeam = async (pos) => {
    console.log(`Trying to remove player ${pos}.`);

    setPosition2Fill(pos);
    console.log("POSITION TO FILL: ", position2Fill);
    const url = `https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-xxklh/endpoint/deletePlayer?pos=${pos}`;
    const response = await fetch(url);

    setShowDreamTeam(true);

    // insert BLURB2
  };

  return (
    <div className="min-h-screen bg-black">
      <h2 className="text-center text-4xl text-white pt-12">
        Atlas Search Soccer
      </h2>
      <div className="flex mx-20 w-full justify-evenly items-center">
        <div
          className=" text-lg text-mongo-400 font-bold"
          onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
        >
          <img
            src={SpotSearch}
            alt="advanced search"
            className="rounded-lg w-48 object-contain mb-4"
          ></img>
          {" Advanced Scouting "}
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          operator={operator}
          setOperator={setOperator}
          setSubmitted={setSubmitted}
          showAutocompletePlayers={showAutocompletePlayers}
          setShowAutocompletePlayers={setShowAutocompletePlayers}
          players={players}
          addPlayerToTeam={addPlayerToTeam}
          position2Fill={position2Fill}
        />
      </div>
      <div classname="px-12">
        <PlayerGrid
          header={searchTerm ? null : "Player Search Results"}
          players={players}
          addPlayerToTeam={addPlayerToTeam}
          position2Fill={position2Fill}
          setPosition2Fill={setPosition2Fill}
          setHighlightCard={setHighlightCard}
          highlightCard={highlightCard}
          dreamTeam={dreamTeam}
          setShowPlayerChoices={setShowPlayerChoices}
          showPlayerChoices={showPlayerChoices}
          searchTerm={searchTerm}
          operator={operator}
          setPlayerIndex={setPlayerIndex}
          setShowPlayerModal={setShowPlayerModal}
          showAdvancedSearch={showAdvancedSearch}
        />
        {showAdvancedSearch && (
          <AdvancedSearch
            salary={salary}
            setSalary={setSalary}
            age={age}
            setAge={setAge}
            overall={overall}
            setOverall={setOverall}
            skillMoves={skillMoves}
            setSkillMoves={setSkillMoves}
            defending={defending}
            setDefending={setDefending}
            dribbling={dribbling}
            setDribbling={setDribbling}
            pace={pace}
            setPace={setPace}
            setCountries={setCountries}
            setClubs={setClubs}
            setPositions={setPositions}
            dob={dob}
            setDob={setDob}
          />
        )}

        <br></br>
        <hr
          style={{
            color: "green",
            backgroundColor: "green",
            height: 2,
            borderColor: "green",
          }}
        />

        <div className="w-full bg-black relative">
          <img
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="stadium"
            className="w-full h-full object-cover absolute"
          />
          <DreamTeamGrid
            players={dreamTeam}
            relegatePlayerFromTeam={relegatePlayerFromTeam}
            position2Fill={position2Fill}
            setPosition2Fill={setPosition2Fill}
            setHighlightCard={setHighlightCard}
            highlightCard={highlightCard}
          />
        </div>
        {showPlayerModal ? (
          <PlayerModal
            players={players}
            playerIndex={playerIndex}
            setShowPlayerModal={setShowPlayerModal}
            setPlayerIndex={setPlayerIndex}
            addPlayerToTeam={addPlayerToTeam}
            position2Fill={position2Fill}
          />
        ) : null}
      </div>
    </div>
  );
};

const getPosition = (spot) => {
  let position = "player";

  switch (spot) {
    case 0:
      position = "goalie";
      break;
    case 1:
      position = "left-back";
      break;
    case 2:
      position = "center-back-left";
      break;
    case 3:
      position = "center-back-right";
      break;
    case 4:
      position = "right-back";
      break;
    case 5:
      position = "left-wing";
      break;
    case 6:
      position = "center-mid";
      break;
    case 7:
      position = "right-wing";
      break;
    case 8:
      position = "forward-left";
      break;
    case 9:
      position = "striker";
      break;
    case 10:
      position = "forward-right";
      break;
    default:
      position = "player";
  }

  return position;
};

export default App;
