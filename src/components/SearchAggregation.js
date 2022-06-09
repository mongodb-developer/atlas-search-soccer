import React, { useState, useContext, useEffect } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchAggregation = ({ searchTerm }) => {
  let basicSearchObject = {
    text: {
      query: searchTerm,
      path: "name",
      fuzzy: {
        maxEdits: 2,
      },
    },
  };

  let mustCount = 0;
  let mustArray = [];
  let filterArray = []; // using filter for stars, borough, cuisine

  return (
    <div className="flex flex-col w-96 rounded h-auto bg-black px-4 pt-10">
      <>
        <pre className="text-fuchsia-400 font-mono text-xl py-2 text-left">
          &#123; $search :
        </pre>
        <pre className="text-blue-500 font-mono text py-2 pl-2 text-left">
          &#47; &#47; optional, defaults to "default"
        </pre>

        <pre className="text-yellow-200 font-mono text-xl py-2 pl-2 text-left">
          index: &#60; indexName &#62;
        </pre>
      </>

      {showCompound && (
        <>
          <pre className="text-blue-300 font-mono pl-2 text-left text-xl font-bold">
            &#123; compound :
          </pre>
          <pre className="text-blue-500 font-mono text py-2 pl-2 text-left">
            &#47; &#47; must | mustNot | should | filter
          </pre>
        </>
      )}

      {showMustAgg && mustArray.length > 0 ? (
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {mustString}
        </SyntaxHighlighter>
      ) : (
        <div className="">
          {searchTerm !== "" && (
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {basicSearchString}
            </SyntaxHighlighter>
          )}

          {food !== "" && (
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {synString}
            </SyntaxHighlighter>
          )}
          {operator !== "text" && (
            <SyntaxHighlighter language="javascript" style={atomDark}>
              {geoString}
            </SyntaxHighlighter>
          )}
        </div>
      )}

      {showFilterAgg && (
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {filterString}
        </SyntaxHighlighter>
      )}
      {functionScore && (
        <div className="border-solid border-2 border-yellow-200 ">
          <pre className="text-blue-300 font-mono pl-2 text-left text-xl font-bold">
            score :
          </pre>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {scoreString}
          </SyntaxHighlighter>
        </div>
      )}

      {showCompound && (
        <pre className="text-blue-300 font-mono pl-2 text-left text-xl font-bold">
          &#125;{" "}
        </pre>
      )}
      {food !== "" && (
        <div>
          <pre className="text-yellow-200 font-mono pl-2 text-left text-xl font-bold">
            highlight :
          </pre>
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {highlightString}
          </SyntaxHighlighter>
        </div>
      )}
      {showAggCode && (
        <pre className="text-fuchsia-400 font-mono text-lg px-0 text-left">
          &#125;{" "}
        </pre>
      )}
    </div>
  );
};

export default SearchAggregation;
