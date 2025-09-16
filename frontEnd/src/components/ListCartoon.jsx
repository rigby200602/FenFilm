import React from "react";
import Box from "./Box";

const ListCartoon = (props) => {
  return (
    <div className="h-[15%] mx-[5%] my-8">
      <h1 className="text-3xl text-white">{props.title}</h1>
      {/* Show box */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:gird-col-4 gap-4">
        {props.data.map((item,i) => {
          return (
              <Box key={i} data={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ListCartoon;
