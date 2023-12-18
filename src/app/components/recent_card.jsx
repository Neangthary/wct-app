import React from "react";

const Eventcard = [
  {
    event: "River Walk",
    description:
      "Hundreds of food stall while you stroll along the river side and watch all crowd enjoying...",
    imageUrl: "/images/recent1.png",
  },
  {
    event: "Meet n Eat",
    description:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    imageUrl: "/images/recent2.png",
  },
  {
    event: "Night-out",
    description:
      "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    imageUrl: "/images/recent3.png",
  },
];

const Recentcard = () => {
  return (
    <div>
      <ul role="list" className="flex flex-wrap gap-3 justify-center">
        {Eventcard.map((eventCard) => (
          <li key={eventCard.event}>
            <div
              className="flex flex-col h-80 w-96 gap-y-2 justify-end"
              style={{
                background: `url(${eventCard.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "0.5rem",
              }}
            >
              <div className="text-start p-5">
                <h3 className="text-base leading-7 tracking-tight text-white">
                  {eventCard.event}
                </h3>
                <p className="text-xs text-white">{eventCard.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recentcard;
