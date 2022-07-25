import React from "react";
import CheckboxGroup from "./CheckboxGroup";
import SearchIcon from "../images/Search.png";
import FacetIcon from "../images/FacetIcon.png";

function CheckboxSection({
  countries,
  setCountries,
  clubs,
  setClubs,
  positions,
  setPositions,
  showFacets,
  setSubmitted,
  countryBuckets,
  clubBuckets,
  positionBuckets,
  setShowFacetCode,
  keywordFacetIndex,
  setKeywordFacetIndex,
}) {
  return (
    <div className="CHECKBOX_COLUMNS flex w-full">
      {/*---------BEGIN COUNTRIES COLUMN---------------*/}
      <div className="COUNTRIES w-1/3">
        <CheckboxGroup
          title="Country"
          itemsArray={countryList}
          setFinalList={setCountries}
          finalList={countries}
          path="nationality_name"
          buckets={countryBuckets}
          showFacets={showFacets}
        />
      </div>
      {/*---------END COUNTRIES COLUMN---------------*/}
      <div className="CLUBS w-1/3 ">
        <CheckboxGroup
          title="Club"
          itemsArray={clubList}
          finalList={clubs}
          setFinalList={setClubs}
          path="club_name"
          buckets={clubBuckets}
          showFacets={showFacets}
        />
      </div>
      {/*---------BEGIN POSITIONS COLUMN---------------*/}
      <div className="POSITIONS w-1/3 overflow-auto">
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
        {/*---------------- BEGIN BUTTON GROUP----------*/}
        <div className="BUTTON GROUP flex space-x-2">
          <button
            type="submit"
            className="mt-10 border border-lime-600 shadow shadow-lime-700/50 rounded-lg text-white px-2"
            onClick={() => setSubmitted(true)}
          >
            {" "}
            Search
            <img
              className="mx-auto  w-20 text-white my-1 z-10 content-image text-2xl"
              src={SearchIcon}
              alt="search"
            />
          </button>
          {showFacets && (
            <button
              type="submit"
              onClick={() => {
                console.log("Click!");
                setShowFacetCode(true);
              }}
              className="mt-10 border border-lime-600 shadow shadow-lime-700/50 rounded-lg text-white px-2"
            >
              {" "}
              Facet Code
              <img
                className="mx-auto  w-20 text-white my-1 z-10 content-image text-2xl "
                src={FacetIcon}
                alt="facet code"
              />
            </button>
          )}
        </div>
        {/*---------------- END BUTTON GROUP----------*/}
        {showFacets && (
          <>
            <div className="flex justify-center">
              <div className="flex items-center mt-4 justify-center w-4/5">
                <label
                  htmlFor="analyzer"
                  className="flex items-center cursor-pointer"
                >
                  <div className="mr-3 text-yellow-300 font-medium">
                    Keyword
                  </div>
                  <div className="relative">
                    <input
                      id="analyzer"
                      type="checkbox"
                      className="sr-only"
                      onChange={() => {
                        setKeywordFacetIndex(!keywordFacetIndex);
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
              <span className="text-yellow-400"> standard analyzer</span> for
              facet results.
            </div>
          </>
        )}
        {/*---------- END FACET TOGGLE -----------*/}
      </div>
      {/*---------END POSITIONS COLUMN---------------*/}
    </div>
  );
}

export default CheckboxSection;

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
  "Dundee United",
  "FC Red Bull Salzburg",
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
