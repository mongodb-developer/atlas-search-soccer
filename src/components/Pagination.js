import React from "react";
import { GiSoccerBall } from "react-icons/gi";
import { HiMinus } from "react-icons/hi";

const Pagination = ({ maxPages, setCurrentPage, currentPage }) => {
  const pageNumbers = [];

  console.log("IN PAGINATION");
  console.log(maxPages);

  // let n = maxPages;
  // let numPages = n[0];

  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-10">
      <ul className="flex justify-center text-2xl mb-4 space-x-2">
        {pageNumbers.map((number) =>
          currentPage === number ? (
            <>
              <button
                key={number}
                className="p-1 rounded-full  bg-white border-4 border-green-600 text-black hover:bg-green-500 hover:text-black"
                onClick={() => {
                  setCurrentPage(number);
                }}
              >
                <GiSoccerBall />
              </button>
              {maxPages !== number && (
                <div className="text-gray-700 my-auto">
                  <HiMinus />
                </div>
              )}
            </>
          ) : (
            <>
              <button
                key={number}
                onClick={() => {
                  setCurrentPage(number);
                }}
                className="py-1 px-1 rounded-full bg-black-500 border-2 border-green-500  text-white hover:bg-green-500 hover:text-white"
              >
                <GiSoccerBall />
              </button>
              {maxPages !== number && (
                <div className="text-gray-700 my-auto">
                  <HiMinus />
                </div>
              )}
            </>
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
