import React, { useState } from "react";
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
}) => {
  return (
    <div className="flex flex-col w-full bg-black">
      <h2 className="text-center text-2xl text-yellow-400">
        Advanced Scouting
      </h2>

      <div className="flex mt-6 justify-evenly items-start">
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
            <div>
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
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="mt-10 border border-white rounded-lg text-white px-2"
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
                <button
                  type="submit"
                  className="mt-10 border border-white rounded-lg text-white px-2"
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
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          <div className="px-2 w-full p-4 border-4 border-indigo-900 rounded-lg text-white">
            <Calendar dob={dob} setDob={setDob} />
          </div>
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
            category="dribbling"
            field="Dribbling"
            value={dribbling}
            setValue={setDribbling}
            max={100}
            step={1}
          />
        </div>
        <div>
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
  "Wolverhampton Wanderers",
  "Burnley",
  "Paris Saint-Germain",
  "Real Madrid CF",
  "Chelsea",
  "Borussia Mönchengladbach",
  "Newcastle United",
  "RCD Mallorca",
  "Everton",
  "Real Betis Balompié",
  "ESTAC Troyes",
  "Tottenham Hotspur",
  "TSG Hoffenheim",
  "VfB Stuttgart",
  "Southampton",
  "Brentford",
  "Brighton & Hove Albion",
  "Genoa",
  "CA Osasuna",
  "FC Barcelona",
  "Crystal Palace",
  "West Ham United",
  "RC Celta de Vigo",
  "Granada CF",
  "Norwich City",
  "Sevilla FC",
  "Villarreal CF",
  "Leicester City",
];

const countryList = [
  "England",
  "Germany",
  "Spain",
  "France",
  "Argentina",
  "Brazil",
  "Japan",
  "Netherlands",
  "United States",
  "Poland",
  "China PR",
  "Sweden",
  "Norway",
  "Republic of Ireland",
  "Portugal",
  "Saudi Arabia",
  "Mexico",
  "Romania",
  "Italy",
  "Korea Republic",
  "Colombia",
  "Belgium",
  "Austria",
  "Denmark",
  "Scotland",
  "Turkey",
  "Uruguay",
  "Australia",
  "India",
  "Venezuela",
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
