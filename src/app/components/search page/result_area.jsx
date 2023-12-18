import React from "react";

const style = {
  resultFound: `flex justify-around my-10 items-center`,
  selectPart: ` outline-none bg-transparent`,
};

function ResultArea() {
  return (
    <div className={style.resultFound}>
      <p className="text-xl font-bold">Phnom Penh : 2831 results found</p>
      <div className="border rounded-lg shadow-lg px-3">
        <div className="pl-1 text-xs">Sort by</div>
        <select className={style.selectPart}>
          <option>Recommended</option>
          <option>Top Rated</option>
          <option>This week</option>
        </select>
      </div>
    </div>
  );
}

export default ResultArea;
