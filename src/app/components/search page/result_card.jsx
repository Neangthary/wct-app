import React from "react";

const style = {
  container: `flex mx-20 mt-5 border rounded-md bg-white shadow-lg`,
  secondContainer: `flex p-4`,
  img: ` w-4/12 rounded-md`,
  content: `ml-10 `,
  btn: `btn btn-outline btn-info mt-20`,
};

function ResultCard() {
  return (
    <div className={style.container}>
      <div className={style.secondContainer}>
        <img
          src="https://cdn-az.allevents.in/events7/banners/0ba78525223592ad7ccd6a23e626f6aad0b3a2c9ef2fd73d12867f2d62019086-rimg-w960-h384-gmir.jpg?v=1695510629"
          className={style.img}
        />
        <div className={style.content}>
          <h1 className="text-xl font-bold  ">River walk</h1>
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>Scroll along the beach take a break enjoy the food</p>
          <button className={style.btn}>See Detail</button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
