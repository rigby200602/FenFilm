import React from "react";

const ListCartoon = (props) => {
  return (
    <div className="h-[15%] mx-[5%] my-8">
      <h1 className="text-3xl text-white">{props.title}</h1>
      {/* Show box */}
      <div className="flex gap-4">
        {props.data.map((item, i) => {
          return (
            <div className="text-white my-8 w-30 md:w-70 cursor-pointer transition hover:scale-105">
              <img key={i} src={item.thumnail} />
              <h1 className="text-start my-2">{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListCartoon;
