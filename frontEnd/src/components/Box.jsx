import React from "react";

const Box = ({data}) => {
  return (
    <div className="text-white my-8 w-30 md:w-70 cursor-pointer transition hover:scale-105">
      {data.map((item, i) => {
        return <img key={i} src={item.thumnail} />;
      })}
    </div>
  );
};

export default Box;
