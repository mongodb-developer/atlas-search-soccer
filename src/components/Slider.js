import React from "react";

import { Range } from "react-range";

const Slider = ({ field, value, setValue, max, step }) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full p-4 border-4 border-indigo-900 rounded-lg text-white">
        <label className="font-bold">{field}</label>
        <Range
          step={step}
          min={0}
          max={max}
          values={value}
          onChange={(value) => {
            setValue(value);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="w-full h-3 pr-2 my-4 bg-green-600 rounded-md mt-10"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-5 h-5 transform translate-x-10 bg-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            />
          )}
        />
        <div className=" text-center">{value[0]}</div>
      </div>
    </div>
  );
};

export default Slider;
