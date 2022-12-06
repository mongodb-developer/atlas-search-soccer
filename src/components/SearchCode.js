import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SearchCode = ({ searchTerm, operator, functionScore }) => {
  let stageObject = {};

  if (operator === "text") {
    stageObject = {
      index: "<INDEXNAME>",
      text: {
        query: searchTerm,
        path: "long_name",
        fuzzy: { maxEdits: 2 },
      },
    };
    if (functionScore) {
      stageObject = {
        index: "<INDEXNAME>",
        text: {
          query: searchTerm,
          path: "long_name",
          fuzzy: { maxEdits: 2 },
          score: {
            function: {
              add: [
                {
                  score: "relevance",
                },
                {
                  path: {
                    value: "overall",
                    undefined: 1,
                  },
                },
              ],
            },
          },
        },
      };
    }
  } else if (operator === "wildcard") {
    stageObject = {
      index: "<INDEXNAME>",
      wildcard: {
        query: searchTerm,
        path: "long_name",
        allowAnalyzedField: true,
      },
    };

    if (functionScore) {
      stageObject = {
        index: "<INDEXNAME>",
        wildcard: {
          query: searchTerm,
          path: "long_name",
          allowAnalyzedField: true,
          score: {
            function: {
              add: [
                {
                  score: "relevance",
                },
                {
                  path: {
                    value: "overall",
                    undefined: 1,
                  },
                },
              ],
            },
          },
        },
      };
    }
  } else if (operator === "autocomplete") {
    stageObject = {
      index: "autocompleteIndex",
      autocomplete: {
        query: searchTerm,
        path: "long_name",
        fuzzy: { maxEdits: 1 },
      },
    };
  }

  const stageString = JSON.stringify(stageObject, null, 2);
  return (
    <div className="flex flex-col w-96 rounded h-auto bg-black px-2 text-sm content-start border border-yellow-200">
      <>
        <pre className="text-fuchsia-400 font-mono text-sm py-2 text-left">
          &#123; $search :
        </pre>

        <SyntaxHighlighter language="javascript" style={atomDark}>
          {stageString}
        </SyntaxHighlighter>
        <pre className="text-fuchsia-400 font-mono text-sm pl-2 text-left  font-bold">
          &#125;
        </pre>
      </>
    </div>
  );
};

export default SearchCode;
