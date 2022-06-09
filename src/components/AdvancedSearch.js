import React from "react";
import Calendar from "./Calendar";
import CheckboxGroup from "./CheckboxGroup";

import Slider from "./Slider";

const AdvancedSearch = ({
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
  setCountries,
  setPositions,
  setClubs,
  dob,
  setDob,
}) => {
  return (
    <div className="flex flex-col w-full bg-black">
      <h2 className="text-center text-xl text-yellow-400">Advanced Scouting</h2>

      <div className="flex mt-6 justify-evenly items-center px-24">
        <div className="flex ml-6 mt-8 ">
          <CheckboxGroup
            field="Select Country"
            itemsArray={countryNames}
            setFinalList={setCountries}
          />
          <CheckboxGroup
            field="Select Club"
            itemsArray={clubNames}
            setFinalList={setClubs}
          />
          <CheckboxGroup
            field="Position"
            itemsArray={positions}
            setFinalList={setPositions}
          />
        </div>

        <div className="flex grid grid-cols-2 gap-x-4 gap-y-8 px-10">
          <div className="px-12 w-full p-4 border-4 border-indigo-900 rounded-lg text-white">
            <Calendar dob={dob} setDob={setDob} />
          </div>
          <Slider field="Age" value={age} setValue={setAge} max={52} step={1} />
          <Slider
            field="Salary (euros)"
            value={salary}
            setValue={setSalary}
            max={150000}
            step={1000}
          />
          <Slider
            field="Overall"
            value={overall}
            setValue={setOverall}
            max={100}
            step={1}
          />
          <Slider
            field="Skills"
            value={skillMoves}
            setValue={setSkillMoves}
            step={1}
            max={5}
          />
          <Slider
            field="Pace"
            value={pace}
            setValue={setPace}
            max={100}
            step={1}
          />
          <Slider
            field="Defending"
            value={defending}
            setValue={setDefending}
            max={100}
            step={1}
          />{" "}
          <Slider
            field="Dribbling"
            value={dribbling}
            setValue={setDribbling}
            max={100}
            step={1}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;

const clubNames = [
  "Arsenal",
  "Manchester United",
  "Wolverhampton Wanderers",
  "Burnley",
  "Paris Saint-Germain",
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
  "Real Madrid CF",
];

const countryNames = [
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

const positions = [
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
