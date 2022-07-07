import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchCodeCheckbox = (path, value, setFilterArray, filterArray) => {
  console.log("PATH: ", path.path);
  console.log("VALUE: ", value);
  let stageObject = {};

  stageObject = {
    text: {
      query: path.value,
      path: path.path,
    },
  };

  const stageString = JSON.stringify(stageObject, null, 2);

  return (
    <div className="text-sm w-4/5">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {stageString}
      </SyntaxHighlighter>
    </div>
  );
};

export default SearchCodeCheckbox;
