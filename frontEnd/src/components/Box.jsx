import React from "react";

const Box = ({data}) => {
  return (
    <div className="max-h-[150px] text-white my-8">
      {data.map((item, i) => {
        return <img key={i} src={item.thumnail} />;
      })}
    </div>
  );
};

export default Box;
