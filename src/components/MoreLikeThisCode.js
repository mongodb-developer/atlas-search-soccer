import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MoreLikeThisCode = ({ playerToMatch }) => {
  let moreLikeThisObject = {};

  moreLikeThisObject = {
    index: "<INDEXNAME>",
    compound: {
      must: [
        {
          moreLikeThis: {
            like: [
              { player_positions: playerToMatch?.player_positions },
              { player_traits: playerToMatch?.player_traits },
            ],
          },
        },
      ],
      mustNot: [
        {
          equals: {
            path: "_id",
            value: `ObjectID('${playerToMatch._id}')`,
          },
        },
      ],
    },
  };

  const moreLikeThisString = JSON.stringify(moreLikeThisObject, null, 2);
  return (
    <div className="flex flex-col w-96 rounded h-auto bg-black px-2 text-sm content-start border border-yellow-200">
      <>
        <pre className="text-fuchsia-400 font-mono text-sm py-2 text-left">
          &#123; $search :
        </pre>

        <SyntaxHighlighter language="javascript" style={atomDark}>
          {moreLikeThisString}
        </SyntaxHighlighter>
        <pre className="text-fuchsia-400 font-mono text-sm pl-2 text-left  font-bold">
          &#125;
        </pre>
      </>
    </div>
  );
};

export default MoreLikeThisCode;
