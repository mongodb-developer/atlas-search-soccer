import { useState, useEffect } from "react";

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, setPlayers] = useState([]);
  const [dreamTeam, setDreamTeam] = useState(emptyTeam);
  const [showDreamTeam, setShowDreamTeam] = useState(true);
  const [operator, setOperator] = useState("text");
  const [submitted, setSubmitted] = useState(false);
  const [showPlayerChoices, setShowPlayerChoices] = useState(false);
  const [showAutocompletePlayers, setShowAutocompletePlayers] = useState(false);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [salary, setSalary] = useState([0]);
  const [age, setAge] = useState([0]);
  const [overall, setOverall] = useState([0]);
  const [skillMoves, setSkillMoves] = useState([0]);
  const [defending, setDefending] = useState([0]);
  const [dribbling, setDribbling] = useState([0]);
  const [pace, setPace] = useState([0]);
  const [countries, setCountries] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [dob, setDob] = useState(new Date(1970, 12, 1));
  const [positions, setPositions] = useState([]);

  const TextEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/players";
  const WildcardEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/wildcard";
  const AutocompleteEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/autocomplete";

  const URL_SEARCH_ADVANCED =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/advancedSearch";

  const getPlayersAutocomplete = async () => {
    let API = AutocompleteEndPoint;
    const url = `${API}?searchTerm=${searchTerm}`;

    const playersJSON = await (await fetch(url)).json();
    setShowAutocompletePlayers(true);
    setShowPlayerChoices(false);
    setPlayers(playersJSON);
    console.log("PLAYERSJSON: ", playersJSON);
  };

  const getPlayers = async () => {
    let API = TextEndPoint;
    if (operator === "wildcard") API = WildcardEndPoint;

    const url = `${API}?searchTerm=${searchTerm}`;

    const playersJSON = await (await fetch(url)).json();

    if (playersJSON && playersJSON.length > 0) {
      setShowPlayerChoices(true);

      setPlayers(playersJSON);
      console.log("PLAYERSJSON: ", playersJSON);
    }
  };

  // ---------------------GET_PLAYERS_ADVANCED------------------------------
  const getPlayersAdvanced = async () => {
    console.log("Advanced Search");

    const data = {
      searchTerm: searchTerm,
      operator: operator,
      countries: countries,
      clubs: clubs,
      age: age[0],
      overall: overall[0],
      dribbling: dribbling[0],
      skillMoves: skillMoves[0],
      defending: defending[0],
      pace: pace[0],
      dob: new Date(dob),
      salary: salary[0],
      positions: positions,
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(URL_SEARCH_ADVANCED, requestOptions);
    const responseJSON = await response.json();
    const advancedSearchPlayers = responseJSON.players;
    const aggregation = responseJSON.aggregation;
    console.log(aggregation);

    if (advancedSearchPlayers && advancedSearchPlayers.length > 0) {
      setShowPlayerChoices(true);

      setPlayers(advancedSearchPlayers);
    }

    // insert big BLURB here
  };
  // ------------------------END_GET_PLAYERS_ADVANCED-----------------------------

  const getTeam = async () => {
    const dreamPlayers = await (
      await fetch(
        "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-ktzfd/endpoint/getTeam"
      )
    ).json();
    setDreamTeam(dreamPlayers);
  };

  useEffect(() => {
    if (operator !== "autocomplete") return;

    if (searchTerm.length < 3) {
      setShowAutocompletePlayers(false);
      return;
    }
    getPlayersAutocomplete();

    // eslint-disable-next-line
  }, [searchTerm]);

  // -------------------------------- USE_EFFECTS ---------------------------
  useEffect(() => {
    if (!submitted) return;
    if (!showAdvancedSearch) {
      getPlayers();
    }
    if (showAdvancedSearch) {
      getPlayersAdvanced();
    }

    setSubmitted(false);
    console.log(operator);
    // eslint-disable-next-line
  }, [submitted]);

  useEffect(() => {
    if (!showDreamTeam) return;
    getTeam();
    setShowDreamTeam(false);

    // eslint-disable-next-line
  }, [showDreamTeam]);
  // ----------------------------END USE_EFFECTS ---------------------------

  return {
    operator,
    setOperator,
    searchTerm,
    setSearchTerm,
    players,
    setPlayers,
    setShowDreamTeam,
    dreamTeam,
    setDreamTeam,
    submitted,
    setSubmitted,
    showPlayerChoices,
    setShowPlayerChoices,
    showAutocompletePlayers,
    setShowAutocompletePlayers,
    showAdvancedSearch,
    setShowAdvancedSearch,
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
    setPositions,
    setCountries,
    setClubs,
    dob,
    setDob,
  };
};

const emptyTeam = [
  {
    spot: 0,
    position: "goalie",
    player: {},
  },

  {
    spot: 1,
    position: "left-back",
    player: {},
  },
  {
    spot: 2,
    position: "center-back-left",
    player: {},
  },
  {
    spot: 3,
    position: "center-back-right",
    player: {},
  },
  {
    spot: 4,
    position: "right-back",
    player: {},
  },
  {
    spot: 5,
    position: "left-wing",
    player: {},
  },
  {
    spot: 6,
    position: "center-mid",
    player: {},
  },
  {
    spot: 7,
    position: "right-wing",
    player: {},
  },
  {
    spot: 8,
    position: "forward-left",
    player: {},
  },
  {
    spot: 9,
    position: "forward-center",
    player: {},
  },
  {
    spot: 10,
    position: "forward-right",
    player: {},
  },
];
