import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchAggregation = ({
  searchTerm,
  operator,
  clubs,
  positions,
  countries,
}) => {
  let basicSearchObject = {};
  let filterArray = [];
  let mustArray = [];
  let shouldArray = [];

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
  const searchString = JSON.stringify(basicSearchObject, null, 2);

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
  const filterArrayString = JSON.stringify(filterArray, null, 2);

  // let mustCount = 0;
  // let mustArray = [];

  return (
    <div className="flex flex-col w-96 rounded h-auto bg-black px-2 text-sm content-start">
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
        <pre className="text-blue-300 font-mono pl-2 text-left text-sm font-bold">
          &#123; compound :
        </pre>
        <pre className="text-blue-500 font-mono text-sm py-2 pl-2 text-left">
          &#47; &#47; must | mustNot | should | filter
        </pre>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {searchString}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {filterArrayString}
        </SyntaxHighlighter>
      </>
    </div>
  );
};

export default SearchAggregation;
