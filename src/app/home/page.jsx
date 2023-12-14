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
            className="h-100 w-100 mx-auto"
            src={"/images/EventHunt.svg"}
            alt=""
          />
          <div className="bg-white py-7 border-">
            <ul
              className="lg:flex flex space-x-10 font-bold justify-center"
              style={{ color: "#4F4F4F" }}
            >
              <li>
                <button className="hover:text-black">Location</button>
              </li>
              <li>
                <button className="hover:text-black">Date</button>
              </li>
              <li>
                <button className="hover:text-black">Type</button>
              </li>
              <li>
                <button className="hover:text-black">Payment</button>
              </li>
              <li>
                <button className="hover:text-black">Search</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
