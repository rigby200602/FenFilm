import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";

const ListCartoon = (props) => {
  // only show 4 box
  const data = props.data.filter(item => item.id < 5);
  return (
    <div className="h-[15%] min-h- mx-[5%] mt-8">
      <Link to={`/collections/${props.collection}`}>
        <h1 className="text-3xl text-white text-center md:text-start">{props.title}</h1>
      </Link>  
      {/* Show box */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item,i) => {
          return (        
                <Box key={i} data={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ListCartoon;
