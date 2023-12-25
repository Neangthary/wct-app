import React from "react";
import SearchArea from "./search_page/search_area";
import ResultArea from "./search_page/result_area";
import ResultCard from "./search_page/result_card";
import Navbar from "./navbar";
import Footer from "./footer";

const style = {
  page: `bg-customBlue`,
};
const Search = () => {
  return (
    <div>
      <Navbar customBgColor={"#2A5A9A"} />
      <div className={style.page}>
        <SearchArea />
      </div>
      <ResultArea />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <Footer />
    </div>
  );
};

export default Search;
