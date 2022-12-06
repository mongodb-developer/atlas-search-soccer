import React from "react";
import Calendar from "./Calendar";

import SearchAggregation from "./SearchAggregation";
import Slider from "./Slider";
import CheckboxSection from "./CheckboxSection";

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
  dobStart,
  setDobStart,
  dobEnd,
  setDobEnd,
  showCalendarCode,
  setShowCalendarCode,
  setSubmitted,
  countryBuckets,
  clubBuckets,
  positionBuckets,
  facetOverallCount,
  showFacets,
  setShowFacetCode,
  keywordFacetIndex,
  setKeywordFacetIndex,
  functionScore,
}) => {
  return (
    <div className="flex flex-col w-full bg-black">
      <h2 className="text-center text-2xl text-yellow-400">
        Advanced Scouting
      </h2>

      <div className="flex mt-6 justify-evenly w-full px-6">
        <div className="COL1 w-1/2">
          {showFacets && (
            <div className="text-blue-300 text-center mb-8">
              Matching Players: {facetOverallCount}
            </div>
          )}
          <div className="CHECKBOX_COLUMNS flex overflow-auto">
            <CheckboxSection
              countries={countries}
              setCountries={setCountries}
              clubs={clubs}
              setClubs={setClubs}
              positions={positions}
              setPositions={setPositions}
              showFacets={showFacets}
              setSubmitted={setSubmitted}
              countryBuckets={countryBuckets}
              clubBuckets={clubBuckets}
              positionBuckets={positionBuckets}
              setShowFacetCode={setShowFacetCode}
              keywordFacetIndex={keywordFacetIndex}
              setKeywordFacetIndex={setKeywordFacetIndex}
            />
          </div>
        </div>
        <div className="w-1/4">
          <div className="SLIDER_GROUP grid grid-cols-2 gap-x-2 gap-y-8 mx-1">
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
            <div className="px-2 w-full p-4 border-4 border-indigo-900 rounded-lg text-white space-y-4 ">
              <Calendar
                dobStart={dobStart}
                setDobStart={setDobStart}
                dobEnd={dobEnd}
                setDobEnd={setDobEnd}
                showCalendarCode={showCalendarCode}
                setShowCalendarCode={setShowCalendarCode}
              />
            </div>
          </div>
        </div>
        <div className="w-auto">
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
            dobStart={dobStart}
            functionScore={functionScore}
            dobEnd={dobEnd}
            showCalendarCode={showCalendarCode}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
