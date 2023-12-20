"use client"
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Feature from "../components/feature_card";
import Recentcard from "../components/recent_card";
import Peoplelove from "../components/people_love";
import Endfooter from "../components/end_widget";
import DateIcon from "../../../public/icons/DateIcon";
import LocationIcon from "../../../public/icons/LocationIcon";
import PaymentIcon from "../../../public/icons/PaymentIcon";
import TypeIcon from "../../../public/icons/TypeIcon";

const Home = () => {

  const renderButton = (icon, text) => (
    <button className="flex flex-initial w-52 p-5 rounded-lg hover:text-black" style={{ backgroundColor: "#EBEBEB" }}>
      {icon}
      {text}
    </button>
  );

  return (
    <div>
      <Navbar />
      <div className="text-white py-10 bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/images/festival.jpg')" }}>
        <div className="container mx-auto text-center">
          <img className="h-100 w-100 mx-auto" src={"/images/EventHunt.svg"} alt="" />
          <div className="bg-white py-4 mx-48 rounded-lg drop-shadow-2xl">
            <ul className="flex flex-wrap font-bold gap-3 justify-center" style={{ color: "#4F4F4F" }}>
              <li>{renderButton(<LocationIcon />, "Location")}</li>
              <li>{renderButton(<DateIcon />, "Date")}</li>
              <li>{renderButton(<TypeIcon />, "Type")}</li>
              <li>{renderButton(<PaymentIcon />, "Payment")}</li>
              <li>
                <button className="flex-initial w-40 bg-blue-500 p-5 rounded-lg drop-shadow-2xl text-white hover:bg-blue-600">
                  Search
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 ">
        <div className="pb-12">
          <h1 className="text-lg font-bold">Feature event</h1>
          <p className="text-xs">Plan your perfect event with event destination, information and inspiration from us</p>
        </div>
        <Feature />
        <div className="pt-12 pb-5">
          <h1 className="text-lg font-bold">What’s happening this week</h1>
        </div>
        <Recentcard />
        <div className="pt-12 pb-5">
          <h1 className="text-lg font-bold">What’s people love</h1>
        </div>
        <Peoplelove />
        <div className="pt-12 pb-5">
          <Endfooter />
          <div className="text-center pt-10">
            <h1 className="text-xl p-2">Explore event with Event Finder</h1>
            <a href="#link" className="text-sm text-blue-500">
              Discover new places and experiences
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
