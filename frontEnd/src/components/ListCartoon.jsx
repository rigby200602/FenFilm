import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";

const ListCartoon = (props) => {
  return (
    <div className="h-[15%] min-h- mx-[5%] my-8">
      <Link to={`/collections/${props.data[0].collection}`}>
        <h1 className="text-3xl text-white text-center md:text-start">{props.title}</h1>
      </Link>  
      {/* Show box */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
