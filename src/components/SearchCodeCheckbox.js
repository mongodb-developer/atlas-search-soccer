import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchCodeCheckbox = (field, value) => {
  let stageObject = {};

  stageObject = {
    text: {
      query: value,
      path: field,
    },
  };

  const stageString = JSON.stringify(stageObject, null, 2);
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {stageString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SearchCodeCheckbox;
