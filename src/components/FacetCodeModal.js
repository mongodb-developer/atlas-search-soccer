import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const FacetCodeModal = ({ setShowFacetCode, searchMetaStage }) => {
  const jsonFacet = JSON.stringify(searchMetaStage, null, 2);
  return (
    <div className="fixed inset-0 z-20 flex justify-center bg-smoke-dark">
      <div className="relative px-6 py-6 mx-auto mt-8 w-1/3 h-auto text-lg text-white whitespace-pre-wrap bg-black overflow-y-auto border border-mongo">
        <div className="text-4xl text-center text-yellow-300">Facet Code</div>

        <div className="">
          <SyntaxHighlighter language="javascript" style={nightOwl}>
            {jsonFacet}
          </SyntaxHighlighter>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 sticky bottom-0 float-right"
            viewBox="0 0 20 20"
            fill="#ca2c92"
            onClick={() => {
              setShowFacetCode(false);
            }}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FacetCodeModal;
