import React from "react";
import { GiSoccerBall } from "react-icons/gi";
import { HiMinus } from "react-icons/hi";

const Pagination = ({
  maxPages,
  setCurrentPage,
  currentPage,
  setSubmitted,
}) => {
  const pageNumbers = [];
  console.log(maxPages);

  // let n = maxPages;
  // let numPages = n[0];

  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  const current =
    "p-1 rounded-full  bg-white border-4 border-green-600 text-black hover:bg-green-500 hover:text-black";
  const notCurrent =
    "py-1 px-1 rounded-full bg-black-500 border-2 border-green-500  text-white hover:bg-green-500 hover:text-white";

  return (
    <nav className="mt-10">
      <ul className="flex justify-center text-2xl mb-4 space-x-2">
        {pageNumbers.map((number, idx) => (
          <div key={idx} className="flex space-x-2">
            <button
              className={currentPage === number ? current : notCurrent}
              onClick={() => {
                setCurrentPage(number);
                if (currentPage !== number) setSubmitted(true);
              }}
            >
              <GiSoccerBall />
            </button>
            {maxPages !== number && (
              <div className="text-slate-400 my-auto">
                <HiMinus />
              </div>
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
