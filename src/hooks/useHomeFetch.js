import { useState, useEffect } from "react";

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [players, setPlayers] = useState([]);
  const [dreamTeam, setDreamTeam] = useState(emptyTeam);
  const [operator, setOperator] = useState("text");
  const [keywordFacetIndex, setKeywordFacetIndex] = useState(true);
  const [functionScore, setFunctionScore] = useState(false);
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
  const [playersFound, setPlayersFound] = useState(true);
  const [maxPages, setMaxPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // FACETS
  const [countryBuckets, setCountryBuckets] = useState([]);
  const [clubBuckets, setClubBuckets] = useState([]);
  const [positionBuckets, setPositionBuckets] = useState([]);
  const [facetOverallCount, setFacetOverallCount] = useState(0);
  const [showFacets, setShowFacets] = useState(false);
  const [searchMetaStage, setSearchMetaStage] = useState({});

  const BasicSearchEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-xxklh/endpoint/players";
  const WildcardEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-xxklh/endpoint/wildcard";
  const AutocompleteEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-xxklh/endpoint/autocomplete";

  const AdvancedSearchEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-xxklh/endpoint/advancedSearch";

  const FacetsEndPoint =
    "https://us-east-1.aws.data.mongodb-api.com/app/atlassearchsoccer-xxklh/endpoint/facets";

  const getPlayersAutocomplete = async () => {
    let API = AutocompleteEndPoint;
    const url = `${API}?searchTerm=${searchTerm}`;

    const response = await (await fetch(url)).json();
    const playersJSON = response.results;

    if (playersJSON && playersJSON.length > 0) {
      setShowAutocompletePlayers(true);
      setPlayersFound(true);
      setShowPlayerChoices(false);
      setPlayers(playersJSON);
      console.log("PLAYERSJSON: ", playersJSON);
    } else if (playersJSON.length === 0) {
      setPlayersFound(false);
      setShowAutocompletePlayers(false);
      setPlayers(playersJSON);
    }
  };

  const getPlayers = async () => {
    let API = BasicSearchEndPoint;
    if (operator === "wildcard") API = WildcardEndPoint;

    const url = `${API}?searchTerm=${searchTerm}&functionScore=${functionScore}&page=${currentPage}`;

    const response = await (await fetch(url)).json();

    const playersJSON = response.results;
    console.log("SEARCHSTAGE: ", response.searchString);
    console.log("MAX PAGES: ", response.maxPages);
    setMaxPages(response.maxPages);

    if (playersJSON && playersJSON.length > 0) {
      setShowPlayerChoices(true);
      setPlayersFound(true);
      setPlayers(playersJSON);
      console.log("PLAYERSJSON: ", playersJSON);
      setPlayersFound(true);
    } else if (playersJSON.length === 0) {
      // setShowPlayerChoices(false);   // show player choices but is only NoPlayersFound
      setPlayersFound(false);
      setPlayers(playersJSON);
    }
  };

  // ---------------------GET_PLAYERS_ADVANCED------------------------------
  const getPlayersAdvanced = async () => {
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
      functionScore: functionScore,
      keywordFacetIndex: keywordFacetIndex,
      page: currentPage,
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(AdvancedSearchEndPoint, requestOptions);
    const responseJSON = await response.json();
    const advancedSearchPlayers = responseJSON.players;
    const searchString = responseJSON.searchString;
    setMaxPages(responseJSON.maxPages);
    console.log(searchString);
    console.log("PLAYERSJSON FROM ADVANCED: ", advancedSearchPlayers);
    console.log(maxPages);

    if (advancedSearchPlayers && advancedSearchPlayers.length > 0) {
      setShowPlayerChoices(true);
      setPlayers(advancedSearchPlayers);
      setPlayersFound(true);
    } else if (advancedSearchPlayers.length === 0) {
      console.log("NO PLAYERS TO SHOW.");
      setShowPlayerChoices(false);
      setPlayersFound(false);
      setPlayers(responseJSON);
    }
  };
  // ------------------------END_GET_PLAYERS_ADVANCED-----------------------------

  // -------------------------FACETS ---------------------------------
  const postFacets = async () => {
    let facetData = {
      keywordFacetIndex: keywordFacetIndex,
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
      body: JSON.stringify(facetData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(FacetsEndPoint, requestOptions);
    const facetResponseJSON = await response.json();
    if (facetResponseJSON.ok === true) {
      setShowFacets(true);
    } else setShowFacets(false);
    console.log("FACETS: ", facetResponseJSON);
    setFacetOverallCount(facetResponseJSON.results[0].count.lowerBound);

    setCountryBuckets(facetResponseJSON.results[0].facet.countryFacet.buckets);
    setClubBuckets(facetResponseJSON.results[0].facet.clubFacet.buckets);
    setPositionBuckets(
      facetResponseJSON.results[0].facet.positionFacet.buckets
    );
    setSearchMetaStage(facetResponseJSON.searchMetaStage);
  };

  // -------------------------------- USE_EFFECTS ---------------------------
  useEffect(() => {
    if (operator !== "autocomplete") {
      return;
    }

    if (searchTerm.length < 3) {
      setShowAutocompletePlayers(false);
      setPlayersFound(true);
      return;
    }
    getPlayersAutocomplete();

    // eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    if (!submitted) return;
    if (!showAdvancedSearch) {
      getPlayers();
    }
    if (showAdvancedSearch) {
      getPlayersAdvanced();
      postFacets();
    }

    setSubmitted(false);

    // eslint-disable-next-line
  }, [submitted]);

  // ----------------------------END USE_EFFECTS ---------------------------

  return {
    operator,
    setOperator,
    searchTerm,
    setSearchTerm,
    players,
    setPlayers,
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
    positions,
    setPositions,
    countries,
    setCountries,
    clubs,
    setClubs,
    dob,
    setDob,
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
    maxPages,
    setMaxPages,
    currentPage,
    setCurrentPage,
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
