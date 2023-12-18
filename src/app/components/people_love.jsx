"use client";
import React from "react";

const Eventcard = [
  {
    event: "Event 1",
    description: "Short description",
    imageUrl: "/images/Rectangle1.png",
  },
  {
    event: "Event 2",
    description: "Short description",
    imageUrl: "/images/Rectangle2.png",
  },
  {
    event: "Event 3",
    description: "Short description",
    imageUrl: "/images/Rectangle3.png",
  },
  {
    event: "Event 4",
    description: "Short description",
    imageUrl: "/images/Rectangle4.png",
  },
  {
    event: "Event 5",
    description: "Short description",
    imageUrl: "/images/Rectangle1.png",
  },
];

const Peoplelove = () => {
  return (
    <div>
      <ul role="list" className="flex flex-wrap gap-3 justify-center">
        {Eventcard.map((Eventcard) => (
          <li key={Eventcard.event}>
            <div className=" items-center gap-x-6">
              <img className="h-100 w-100" src={Eventcard.imageUrl} alt="" />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {Eventcard.event}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {Eventcard.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Peoplelove;
