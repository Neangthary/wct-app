import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="text-white py-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/festival.jpg')",
        }}
      >
        <div className="container mx-auto text-center">
          <img
            className="h-110 w-110 mx-auto"
            src={"/images/EventHunt.svg"}
            alt=""
            style={{ filter: "brightness(100%)" }}
          />
          <div className="bg-white py-7">
            <ul
              className="lg:flex flex space-x-10 font-bold"
              style={{ color: "#4F4F4F" }}
            >
              <li>
                <button className="hover:text-black">Home</button>
              </li>
              <li>
                <button className="hover:text-black">Discovery</button>
              </li>
              <li>
                <button className="hover:text-black">About</button>
              </li>
              <li>
                <button className="hover:text-black">Contact</button>
              </li>
            </ul>
          </div>
          <button className="bg-white text-blue-500 font-semibold px-6 py-2 mt-8 rounded-full hover:bg-gray-800 hover:text-white">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
