import React from "react";
import SearchArea from "../components/search page/search_area";
import ResultArea from "../components/search page/result_area";
import ResultCard from "../components/search page/result_card";

const style = {
  page: `bg-customBlue`,
};
const Home = () => {
  return (
    <div>
      <div className={style.page}>
        <SearchArea />
      </div>
      <ResultArea />
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </div>
  );
};

export default Home;
