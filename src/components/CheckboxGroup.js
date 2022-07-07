import React, { useState } from "react";
import SearchCodeCheckbox from "./SearchCodeCheckbox";

const CheckboxGroup = ({
  title,
  itemsArray,
  setFinalList,
  finalList,
  path,
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
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="left-section space-x-4">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {finalList.length !== 0 && (
        <div className="w-full">
          <SearchCodeCheckbox path={path} value={finalList} />
        </div>
      )}
    </div>
  );
};

export default CheckboxGroup;
