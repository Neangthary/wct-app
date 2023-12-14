"use client";
import React from "react";

const Eventcard = [
  {
    event: "River Walk",
    description: "Hundreds of food stall while you stroll along the river side",
    imageUrl: "/images/Rectangle1.png",
  },
  {
    event: "Meet n Eat",
    description:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    imageUrl: "/images/Rectangle2.png",
  },
  {
    event: "Night-out",
    description:
      "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    imageUrl: "/images/Rectangle3.png",
  },
];

const Recentcard = () => {
  return (
    <div>
      <ul role="list" className="flex flex-wrap gap-3 justify-center">
        {Eventcard.map((eventCard) => (
          <li key={eventCard.event}>
            <div className="flex flex-col items-center gap-y-2">
              <img className="h-100 w-100" src={eventCard.imageUrl} alt="" />
              <div className="text-center">
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  {eventCard.event}
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">
                  {eventCard.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recentcard;
