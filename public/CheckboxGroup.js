import React, { useState } from "react";

const CheckboxGroup = ({ field, itemsArray, setFinalList }) => {
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
    console.log(checkedCountries);
  };

  return (
    <div className="text-white ml-12 p-2">
      <h3 className="text-xl font-bold mb-2 text-green-500">{field}</h3>
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
  );
};

export default CheckboxGroup;
