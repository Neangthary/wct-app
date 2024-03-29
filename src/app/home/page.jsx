import React from "react";

const Home = () => {
  return (
    <div
      className="bg-blue-500 text-white py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('')",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold">
          Welcome to Event Navigator App
        </h1>
        <p className="mt-4 text-lg">
          An awesome Event Navigator website that provides an exclusive event
          such as Khmer New Year, Bun Pjum Ben, Bun Om Tuk, and etc.
        </p>
        <button className="bg-white text-blue-500 font-semibold px-6 py-2 mt-8 rounded-full hover:bg-gray-800 hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
