import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const Calendar = ({ dob, setDob }) => {
  return (
    <div>
      <Styles>
        <h2>Date of Birth</h2>
        <DatePicker
          selected={dob}
          onChange={(date) => setDob(date)}
          dateFormat="MM/dd/yyyy"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
        />
      </Styles>
    </div>
  );
};

export default Calendar;
