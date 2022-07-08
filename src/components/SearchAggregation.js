import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchAggregation = ({
  searchTerm,
  operator,
  clubs,
  positions,
  countries,
  age,
  overall,
  dribbling,
  pace,
  skillMoves,
  defending,
  salary,
  dob, // TO DO - DEAL WITH DOB !!!!!!!!!!!!!!!!!!!!!!!
}) => {
  let basicSearchObject = getBasicObject(operator, searchTerm);
  const basicSearchString = JSON.stringify(basicSearchObject, null, 2);

  const shouldArrayValues = [
    { name: "age", value: age[0] },
    { name: "wage_eur", value: salary[0] },
  ];
  const mustArrayValues = [
    { name: "overall", value: overall[0] },
    { name: "skill_moves", value: skillMoves[0] },
    { name: "dribbling", value: dribbling[0] },
    { name: "pace", value: pace[0] },
    { name: "defending", value: defending[0] },
  ];
  const filterArray = getFilterArray(positions, clubs, countries);
  const shouldArray = getShouldArray(shouldArrayValues);
  const mustArray = getMustArray(mustArrayValues);

  let compoundString = "";

  /**********************************************************
   * LOGIC TO IMPLEMENT
   * STEP 1. SEE if STRINGS ARE VALID for fields
   *
   **********************************************************/

  if (
    filterArray.length > 0 ||
    mustArray.length > 0 ||
    shouldArray.length > 0
  ) {
    let compoundObject = {};

    if (basicSearchObject !== {}) {
      mustArray.push(basicSearchObject); // MAKE SURE IT GETS PUSH TO THE FRONT OF THE ARRAY
    }
    compoundObject.must = mustArray; // TEST IF IT WORKS FOR EMPTY MUST + NO BASIC SEARCH OBJECT
    if (shouldArray.length > 0) {
      compoundObject.should = shouldArray;
    }
    if (filterArray.length > 0) {
      compoundObject.filter = filterArray;
    }

    compoundString = JSON.stringify(compoundObject, null, 2);
  }

  return (
    <div className="flex flex-col w-96 rounded h-auto bg-black px-2 text-sm content-start border border-yellow-200">
      <>
        <pre className="text-fuchsia-400 font-mono text-sm py-2 text-left">
          &#123; $search :
        </pre>
        <pre className="text-blue-500 font-mono text-sm py-2 pl-2 text-left">
          &#47; &#47; optional, defaults to "default"
        </pre>

        <pre className="text-yellow-200 font-mono text-sm py-2 pl-2 text-left">
          index: &#60; indexName &#62;
        </pre>
      </>

      <>
        {compoundString !== "" && (
          <>
            <pre className="text-blue-300 font-mono mx-6 text-left text-sm font-bold">
              &#123; compound :
            </pre>
            <pre className="text-blue-500 font-mono text-sm py-2 pl-2 text-left">
              &#47; &#47; must | mustNot | should | filter
            </pre>
          </>
        )}
        {compoundString === "" ? (
          <div className="px-6">
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {basicSearchString}
            </SyntaxHighlighter>
          </div>
        ) : (
          <div className="px-6">
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {compoundString}
            </SyntaxHighlighter>
          </div>
        )}
        {compoundString !== "" && (
          <pre className="text-blue-300 font-mono text-left text-sm font-bold mx-6">
            &#125;
          </pre>
        )}
        <pre className="text-fuchsia-400 font-mono text-sm pl-2 text-left  font-bold">
          &#125;
        </pre>
      </>
    </div>
  );
};

// HELPER FUNCTIONS TO GET SEARCH OBJECTS FOR SEARCH STAGE - BASIC AND COMPOUND
const getBasicObject = (operator, searchTerm) => {
  let basicSearchObject = {};

  if (operator === "text") {
    basicSearchObject = {
      text: {
        query: searchTerm,
        path: "long_name",
        fuzzy: {
          maxEdits: 2,
        },
      },
    };
  } else if (operator === "wildcard") {
    basicSearchObject = {
      wildcard: {
        query: searchTerm,
        path: "long_name",
        allowAnalyzedField: true,
      },
    };
  } else if (operator === "autocomplete") {
    basicSearchObject = {
      wildcard: {
        query: searchTerm,
        path: "long_name",
        allowAnalyzedField: true,
      },
    };
  }

  return basicSearchObject;
};

const getShouldArray = (shouldArrayValues) => {
  let shouldArray = [];
  for (let i = 0; i < shouldArrayValues.length; i++) {
    if (shouldArrayValues[i].value !== 0) {
      shouldArray.push({
        range: {
          lte: shouldArrayValues[i].value,
          path: shouldArrayValues[i].name,
        },
      });
    }
  }

  return shouldArray;
};

const getMustArray = (mustArrayValues) => {
  let mustArray = [];
  for (let i = 0; i < mustArrayValues.length; i++) {
    if (mustArrayValues[i].value !== 0) {
      mustArray.push({
        range: {
          gte: mustArrayValues[i].value,
          path: mustArrayValues[i].name,
        },
      });
    }
  }

  return mustArray;
};

const getFilterArray = (positions, clubs, countries) => {
  let filterArray = [];

  if (positions.length > 0) {
    filterArray.push({
      text: {
        query: positions,
        path: "player_positions_array",
      },
    });
  }
  if (clubs.length > 0) {
    filterArray.push({
      text: {
        query: clubs,
        path: "club_name",
      },
    });
  }
  if (countries.length > 0) {
    filterArray.push({
      text: {
        query: countries,
        path: "nationality_name",
      },
    });
  }

  return filterArray;
  //   END PROCESS FILTER ARRAY FOR POSITIONS, CLUBS, COUNTRIES--------------------------------------
};

export default SearchAggregation;
