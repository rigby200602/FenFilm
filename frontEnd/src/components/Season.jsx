import React from "react";
import lists from "../data/lists.json";
import { useParams } from "react-router-dom";
import { filmData } from "../context/AppContext";
import seasons from "../data/seasons.json";

const Season = ({ data }) => {
  // fetch id from url
  const { id } = useParams();
  // get season data
  const season = seasons.find((s) => s.id === data);
  // get list film through season
  const listFilm = lists.filter((l) => l.season === season.id);
  console.log(listFilm);
  return (
    <div className="mx-[5%] mb-4 text-white flex">
      <h1 className="text-xl hidden lg:block w-70">{season.name} :</h1>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 gap-2">
        {listFilm.map((item, id) => (
          <div
            key={id}
            className="w-16 sm:w-20 md:w-22 lg:w-24 h-10 cursor-pointer py-[5%] mx-auto
          hover:border hover:border-white hover:rounded-2xl hover:text-black hover:bg-white
          // for reponsive
          border border-white rounded-2xl text-black bg-white
          lg:border-0 lg:rounded-none lg:text-white lg:bg-transparent
          "
          >
            <p className="text-center">{item.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Season;
