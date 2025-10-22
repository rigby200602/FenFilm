import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";

const ListCartoon = (props) => {
  // get collection
  const collection = props.collection;
  // get all data from the collection
  const list = props.data.filter((i) => i.collection === collection);
  // only show 4 box
  const data = list.filter((item) => item.id < 5);
  return (
    <div className="h-[15%] mx-[5%] mt-8">
      {data.length > 0 ? (
        <div>
          <h1 className="text-3xl text-white text-center md:text-start">
            <Link to={`/collections/${props.collection}`}>{props.title}</Link>
          </h1>
          {/* Show box */}
          {/* Check if data have any attribute, only render if have any */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item, i) => {
              return <Box key={i} data={item} />;
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ListCartoon;
