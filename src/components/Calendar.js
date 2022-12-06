import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import styled from "styled-components";
const Styles = styled.div`
  color: white;
  font-family: "Lexend Deca", sans-serif;
  background: #061621;
  font-size: 1rem;
  font-weight: lighter;
  margin: 2rem, 2rem, 2rem, 2rem;

  h2 {
    color: var(--medGray);
    font-family: "Lexend Deca", sans-serif;
    font-weight: 200;
    /* margin-top: 8px; */
    padding-top: 8px;
    pa
  }

  input {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    width: 100%;
    margin: 5px;
    background-color: transparent;
    border-bottom: 2px solid #e3b924;
    &:focus {
      outline: none;
    }
  }
`;

const Calendar = ({
  showCalendarCode,
  setShowCalendarCode,
  dobStart,
  setDobStart,
  dobEnd,
  setDobEnd,
}) => {
  const initialStart = new Date(1970, 12, 1);
  const initialEnd = new Date(2012, 1, 4);

  useEffect(() => {
    if (
      dobStart.getTime() !== initialStart.getTime() ||
      dobEnd.getTime() !== initialEnd.getTime()
    ) {
      setShowCalendarCode(true);
    } else setShowCalendarCode(false);

    // eslint-disable-next-line
  }, [dobEnd, dobStart]);

  let calendarObject = {
    range: {
      path: "dob",
      gte: new Date(dobStart),
      lte: new Date(dobEnd),
    },
  };
  const calendarString = JSON.stringify(calendarObject, null, 2);

  return (
    <div>
      <Styles>
        <h2>Date of birth not before:</h2>
        <DatePicker
          selected={dobStart}
          onChange={(date) => setDobStart(date)}
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
        />
        <h2>Date of birth not after:</h2>
        <DatePicker
          selected={dobEnd}
          onChange={(date) => setDobEnd(date)}
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
        />
        {showCalendarCode && (
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {calendarString}
          </SyntaxHighlighter>
        )}
      </Styles>
    </div>
  );
};

export default Calendar;
