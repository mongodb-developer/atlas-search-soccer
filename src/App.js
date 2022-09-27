// Dependencies
import React, { useEffect, useState } from "react";
import { useHomeFetch } from "./hooks/useHomeFetch";
import PlayerGrid from "./components/PlayerGrid";
import NoPlayersFound from "./components/NoPlayersFound";

import DreamTeamGrid from "./components/DreamTeamGrid";
import SearchBar from "./components/SearchBar";
import PlayerModal from "./components/PlayerModal";
import FacetCodeModal from "./components/FacetCodeModal";
import AdvancedSearch from "./components/AdvancedSearch";
import SpotSearch from "./images/Search_UI.png";

const App = () => {
  const [position2Fill, setPosition2Fill] = useState(100);
  const [highlightCard, setHighlightCard] = useState(null);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showFacetCode, setShowFacetCode] = useState(false);

  const [playerIndex, setPlayerIndex] = useState(-100);

  const {
    operator,
    setOperator,
    searchTerm,
    setSearchTerm,
    players,
    dreamTeam,
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
    positions,
    clubs,
    countries,
    dob,
    setDob,
    setDreamTeam,
    playersFound,
    setPlayersFound,
    countryBuckets,
    clubBuckets,
    positionBuckets,
    facetOverallCount,
    showFacets,
    searchMetaStage,
    keywordFacetIndex,
    setKeywordFacetIndex,
    functionScore,
    setFunctionScore,
  } = useHomeFetch();

  useEffect(() => {
    const team = localStorage.getItem("dream-team-players");

    if (team) {
      const dreamTeamPlayers = JSON.parse(
        localStorage.getItem("dream-team-players")
      );
      setDreamTeam(dreamTeamPlayers);
    } else {
      console.log("Team is not yet saved to storage");
    }

    // eslint-disable-next-line
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("dream-team-players", JSON.stringify(items));
  };

  //-------------------------------- FUNCTION TO ADDPLAYER --------------------------------------------------------
  const addPlayerToTeam = (player, spot) => {
    let position = getPosition(spot);

    const newPlayer = {
      spot: spot,
      position: position,
      player: player,
    };
    // --------------- UPDATING TEAM AND SAVING TO LOCAL STORAGE ------------------------------
    let newDreamTeam = dreamTeam.filter((player) => player.spot !== spot);
    newDreamTeam.push(newPlayer);
    newDreamTeam.sort(function (a, b) {
      return a.spot - b.spot;
    });

    setDreamTeam(newDreamTeam);
    saveToLocalStorage(newDreamTeam);
    // ------------------- END UPDATING TEAM AND SAVING TO LOCAL STORAGE ------------------------------
    setHighlightCard(null);
    setShowPlayerChoices(false);
    setSearchTerm("");
    setShowAdvancedSearch(false);
  };

  //-------------------------------- END FUNCTION TO ADDPLAYER --------------------------------------------------------

  const relegatePlayerFromTeam = async (pos) => {
    console.log(`Trying to remove player ${pos}.`);

    let newDreamTeam = dreamTeam.filter((player) => player.spot !== pos);
    newDreamTeam.push({
      spot: pos,
      position: getPosition(pos),
      player: {},
    });
    newDreamTeam.sort(function (a, b) {
      return a.spot - b.spot;
    });
    setDreamTeam(newDreamTeam);
    saveToLocalStorage(newDreamTeam);
  };

  return (
    <div className="min-h-screen bg-black">
      <h2 className="text-center text-4xl text-white pt-12">
        Atlas Search Soccer
      </h2>
      <h2 className="text-center text-xl text-mongo-400 pt-4">
        Build Your Soccer Dream Team ⚽
      </h2>
      <div className="flex mx-20 w-full justify-around items-center">
        <div
          className="flex flex-col text-lg text-mongo-400 font-bold w-1/5"
          onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
        >
          <img
            src={SpotSearch}
            alt="advanced search"
            className="rounded-lg mx-auto w-52 object-contain mb-4 border border-slate-700 shadow shadow-green-500/50"
          ></img>
          <div className="text-center">Advanced Scouting</div>
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
          setPlayersFound={setPlayersFound}
          functionScore={functionScore}
          setFunctionScore={setFunctionScore}
        />
      </div>

      <div className="px-12">
        {playersFound || searchTerm === "" ? (
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
            functionScore={functionScore}
          />
        ) : (
          <NoPlayersFound />
        )}
        {showAdvancedSearch && (
          <AdvancedSearch
            salary={salary}
            searchTerm={searchTerm}
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
            positions={positions}
            clubs={clubs}
            countries={countries}
            dob={dob}
            setDob={setDob}
            operator={operator}
            setSubmitted={setSubmitted}
            countryBuckets={countryBuckets}
            clubBuckets={clubBuckets}
            positionBuckets={positionBuckets}
            facetOverallCount={facetOverallCount}
            showFacets={showFacets}
            setShowFacetCode={setShowFacetCode}
            keywordFacetIndex={keywordFacetIndex}
            setKeywordFacetIndex={setKeywordFacetIndex}
            functionScore={functionScore}
          />
        )}

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
        {showFacetCode && (
          <FacetCodeModal
            setShowFacetCode={setShowFacetCode}
            searchMetaStage={searchMetaStage}
          />
        )}
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
