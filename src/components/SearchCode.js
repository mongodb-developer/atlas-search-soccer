import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchCode = ({ searchTerm, operator }) => {
  let stageObject = {};

  if (operator === "text") {
    stageObject = {
      text: {
        query: searchTerm,
        path: "name_long",
        fuzzy: { maxEdits: 1 },
      },
    };
  } else if (operator === "wildcard") {
    stageObject = {
      wildcard: {
        query: searchTerm,
        path: "name_long",
        allowAnalyzedField: true,
      },
    };
  } else {
    stageObject = {
      index: "autocomplete",
      autocomplete: {
        query: searchTerm,
        path: "name_long",
      },
    };
  }
  const stageString = JSON.stringify(stageObject, null, 2);
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {stageString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SearchCode;
