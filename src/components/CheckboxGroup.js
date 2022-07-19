import React, { useState } from "react";
import SearchCodeCheckbox from "./SearchCodeCheckbox";

const CheckboxGroup = ({
  title,
  itemsArray,
  setFinalList,
  finalList,
  path,
  setFilterArray,
  filterArray,
  buckets,
  showFacets,
}) => {
  const [checkedState, setCheckedState] = useState(
    new Array(itemsArray.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    let checkedCountries = [];
    for (let i = 0; i < itemsArray.length; i++) {
      if (updatedCheckedState[i] === true) {
        checkedCountries.push(itemsArray[i]);
      }
    }
    setFinalList(checkedCountries);

    console.log(`${path}: ${finalList}`);
  };

  return (
    <div className="flex flex-col">
      <div className="text-white  p-2">
        <h3 className="text-xl font-bold mb-2 text-green-500">{title}</h3>
        <ul className="countries-list">
          {itemsArray.map((name, index) => {
            let count = 0;
            for (let i = 0; i < buckets.length; i++) {
              if (buckets[i]._id === name) {
                count = buckets[i].count;
              }
            }
            return (
              <li key={index}>
                <div className="flex space-x-4 ">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  {showFacets && count !== 0 && (
                    <div className="text-blue-300">({count})</div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {finalList.length !== 0 && (
        <div className="w-full">
          <SearchCodeCheckbox
            path={path}
            value={finalList}
            setFilterArray={setFilterArray}
            filterArray={filterArray}
          />
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup;
