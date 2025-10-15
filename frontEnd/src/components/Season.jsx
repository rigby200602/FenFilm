import React from "react";
import lists from "../data/lists.json";
import { Link, useParams } from "react-router-dom";
import seasons from "../data/seasons.json";
import App from "../App";

const Season = ({ data }) => {
  // fetch id from url
  const { id } = useParams();
  // get season data
  const season = seasons.find((s) => s.id === data);
  // get list film through season
  const listFilm = lists.filter((l) => l.season === season.id);
  return (
    // check if listFilm have any value, only show when have value
    <>
    { listFilm.length ? ( 
      <div className="mx-[5%] mb-4 text-white flex">
        <h1 className="text-xl hidden lg:block w-70">{season.name} :</h1>
        <div className="w-full grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 gap-2">
          {listFilm.map((item, id) => (
          <Link
            to={`/play/${item.id}`}
            key={id}
            onClick={()=> scrollTo(0,0)}
            className="h-10 cursor-pointer py-[5%] mx-auto w-full max-w-22 sm:max-w-24 md:max-w-22 lg:max-w-28
          hover:border hover:border-white hover:rounded-2xl hover:text-black hover:bg-white
          // for reponsive
          border border-white rounded-2xl text-black bg-white
          lg:border-0 lg:rounded-none lg:text-white lg:bg-transparent
          "
          >
            <p className="text-center">{item.id}</p>
          </Link>
        ))}
      </div>
    </div>
) : (null) } 
   </>
  );
};

export default Season;
