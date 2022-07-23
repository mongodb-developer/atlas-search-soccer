import React from "react";
import Calendar from "./Calendar";
import CheckboxGroup from "./CheckboxGroup";
import SearchAggregation from "./SearchAggregation";
import Slider from "./Slider";

import SearchIcon from "../images/Search.png";
import FacetIcon from "../images/FacetIcon.png";

const AdvancedSearch = ({
  salary,
  setSalary,
  searchTerm,
  operator,
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
  setCountries,
  setPositions,
  setClubs,
  clubs,
  countries,
  positions,
  dob,
  setDob,
  setSubmitted,
  countryBuckets,
  clubBuckets,
  positionBuckets,
  facetOverallCount,
  showFacets,
  setShowFacetCode,
  keywordFacetIndex,
  setKeywordFacetIndex,
}) => {
  return (
    <div className="flex flex-col w-full bg-black">
      <h2 className="text-center text-2xl text-yellow-400">
        Advanced Scouting
      </h2>

      <div className="flex mt-6 justify-evenly items-start w-auto">
        <div>
          {showFacets && (
            <div className="text-blue-300 text-center">
              Matching Players: {facetOverallCount}
            </div>
          )}
          <div className="flex mt-8">
            <CheckboxGroup
              title="Select Country"
              itemsArray={countryList}
              setFinalList={setCountries}
              finalList={countries}
              path="nationality_name"
              buckets={countryBuckets}
              showFacets={showFacets}
            />
            <CheckboxGroup
              title="Select Club"
              itemsArray={clubList}
              finalList={clubs}
              setFinalList={setClubs}
              path="club_name"
              buckets={clubBuckets}
              showFacets={showFacets}
            />
            <div className="w-1/3">
              {" "}
              <CheckboxGroup
                title="Position"
                itemsArray={positionsList}
                finalList={positions}
                setFinalList={setPositions}
                path="player_positions_array"
                buckets={positionBuckets}
                showFacets={showFacets}
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="mt-10 border border-lime-600 shadow shadow-lime-700/50 rounded-lg text-white px-2"
                >
                  {" "}
                  Search
                  <img
                    className="mx-auto  w-20 text-white my-1 z-10 content-image text-2xl"
                    src={SearchIcon}
                    alt="search"
                    onClick={() => setSubmitted(true)}
                  />
                </button>
                {showFacets && (
                  <button
                    type="submit"
                    className="mt-10 border border-lime-600 shadow shadow-lime-700/50 rounded-lg text-white px-2"
                  >
                    {" "}
                    Facet Code
                    <img
                      className="mx-auto  w-20 text-white my-1 z-10 content-image text-2xl "
                      src={FacetIcon}
                      alt="facet code"
                      onClick={() => setShowFacetCode(true)}
                    />
                  </button>
                )}
              </div>
              {showFacets && (
                <>
                  <div class="flex justify-center">
                    <div className="flex items-center mt-4 justify-center w-4/5">
                      <label
                        for="analyzer"
                        className="flex items-center cursor-pointer"
                      >
                        <div className="mr-3 text-yellow-300 font-medium">
                          Keyword
                        </div>
                        <div class="relative">
                          <input
                            id="analyzer"
                            type="checkbox"
                            className="sr-only"
                            onChange={() => {
                              setKeywordFacetIndex(!keywordFacetIndex);
                              console.log("TOGGLE: ", keywordFacetIndex);
                              //setSubmitted
                            }}
                          />
                          <div className="rail w-10 h-4 bg-white rounded-full shadow-inner"></div>
                          <div className="dot absolute w-6 h-6 bg-fuchsia-700 rounded-full shadow -left-1 -top-1 transition"></div>
                        </div>

                        <div className="ml-3 text-yellow-300 font-medium">
                          Standard
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="text-white my-4 text-center">
                    Try the
                    <span className="text-yellow-400">
                      {" "}
                      standard analyzer
                    </span>{" "}
                    for facet results.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-8 mx-1">
          <Slider
            category="overall"
            field="Overall"
            value={overall}
            setValue={setOverall}
            max={100}
            step={1}
          />
          <Slider
            category="skill_moves"
            field="Skills"
            value={skillMoves}
            setValue={setSkillMoves}
            step={1}
            max={5}
          />
          <Slider
            category="dribbling"
            field="Dribbling"
            value={dribbling}
            setValue={setDribbling}
            max={100}
            step={1}
          />
          <Slider
            category="pace"
            field="Pace"
            value={pace}
            setValue={setPace}
            max={100}
            step={1}
          />
          <Slider
            category="defending"
            field="Defending"
            value={defending}
            setValue={setDefending}
            max={100}
            step={1}
          />{" "}
          <Slider
            category="age"
            field="Age"
            value={age}
            setValue={setAge}
            max={52}
            step={1}
          />
          <Slider
            category="wage_eur"
            field="Salary (euros)"
            value={salary}
            setValue={setSalary}
            max={150000}
            step={1000}
          />
          <div className="px-2 w-full p-4 border-4 border-indigo-900 rounded-lg text-white">
            <Calendar dob={dob} setDob={setDob} />
          </div>
        </div>
        <div className=" mx-auto">
          <SearchAggregation
            searchTerm={searchTerm}
            operator={operator}
            positions={positions}
            clubs={clubs}
            countries={countries}
            age={age}
            overall={overall}
            dribbling={dribbling}
            pace={pace}
            skillMoves={skillMoves}
            defending={defending}
            salary={salary}
            dob={dob}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;

const clubList = [
  "Arsenal",
  "Manchester United",
  "Chelsea",
  "Liverpool",
  "Tottenham Hotspur",
  "West Ham United",
  "Manchester City",

  "Paris Saint-Germain",
  "Olympique de Marseille",
  "AS Monaco",
  "LOSC Lille",
  "Olympique Lyonnais",
  "ESTAC Troyes",

  "FC Bayern München",
  "Borussia Dortmund",
  "FC Schalke 04",
  "SV Werder Bremen",
  "VfB Stuttgart",

  "Real Madrid CF",
  "Atlético de Madrid",
  "FC Barcelona",
  "Valencia CF",
  "Real Betis Balompié",
  "Sevilla FC",

  "Juventus",
  "AC Milan",
  "Roma",
  "Napoli",
  "Arsenal de Sarandí",
];

const countryList = [
  "England",
  "Germany",
  "Spain",
  "France",
  "Argentina",
  "Brazil",
  "Italy",
  "Netherlands",
  "Portugal",
  "United States",
  "Serbia",
  "Uruguay",
  "Colombia",
  "Venezuela",
  "Poland",
  "China PR",
  "Sweden",
  "Norway",
  "Republic of Ireland",
  "Saudi Arabia",
  "Mexico",
  "Korea Republic",
  "Belgium",
  "Austria",
  "Denmark",
  "Scotland",
  "Turkey",
  "Australia",
  "India",
];

const positionsList = [
  "CB",
  "CM",
  "LWB",
  "RM",
  "RW",
  "CAM",
  "CDM",
  "RWB",
  "LB",
  "LW",
  "RB",
  "ST",
  "GK",
  "LM",
  "CF",
];
