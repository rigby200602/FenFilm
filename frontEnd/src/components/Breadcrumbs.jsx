import React, { use } from "react";
import { IoHome } from "react-icons/io5";
import { useApp } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import collections from "../data/collections.json";
const Breadcrumbs = () => {
  // get id
  const { id } = useParams();
  const { navigate, filmData } = useApp();
  // get film data
  const film = filmData(id);
  // get collection id
  const collection = film.collection;
  // get collection name
  const collectionName = collections.find((c) => c.id === Number(collection))
    ?.name;
  return (
    <div className="hidden md:flex flex-wrap space-x-2 text-sm text-gray-500 font-medium mx-[5%] my-4 items-center">
      <IoHome size="20" onClick={() => navigate("/")} />
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
          fill="#CBD5E1"
        />
      </svg>
      <Link to={`/collections/${film.collection}`}>{collectionName}</Link>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
          fill="#CBD5E1"
        />
      </svg>
      <Link to={`/play/${id}`} className="text-white">Tập {id}</Link>
      {/* <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
          fill="#CBD5E1"
        />
      </svg>
      <a href="#" className="text-indigo-500">
        Earphones
      </a> */}
    </div>
  );
};

export default Breadcrumbs;
