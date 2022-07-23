import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchCodeRange = ({ field, value }) => {
  let stageObject = {};

  // from a slider - age and salary lte
  if (field === "age" || field === "wage_eur") {
    stageObject = {
      range: {
        lte: value,
        path: field,
      },
    };
  } else {
    stageObject = {
      range: {
        gte: value,
        path: field,
      },
    };
  }

  const stageString = JSON.stringify(stageObject, null, 2);
  return (
    <div className="text-sm overflow-scroll">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {stageString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SearchCodeRange;
