import React, {  useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Season from "../components/Season";
import collections from "../data/collections.json";
import { AppContext } from "../context/AppContext";

const Play = () => {
  // call context
  const { filmData } = useContext(AppContext);

  // get id from url
  const { id } = useParams();
  // fetch film url from database
  const film = filmData(id || "");
  // get film url
  const filmUrl = film ? film.url : "";
  // get id collection
  const collectionId = film ? film.collection : null;
  // get seasons from collection
  const seasons = collectionId
    ? collections.find((c) => c.id === collectionId)?.seasons
    : [];
  return (
    <div>
      <NavBar />
      <div className="my-5 mx-[5%]">
        <iframe
          key={id}
          src={filmUrl}
          title={film?.title}
          loading="lazy"
          allow="autoplay; picture-in-picture; fullscreen"
          className="w-full h-[60vh] md:h-[80vh] rounded-lg bg-black"
        ></iframe>
      </div>
      {/* Check if seasons null or not, will render if have any attribute */}
      {seasons
        ? seasons.map((season, id) => {
            return <Season key={id} data={season} />;
          })
        : null}
      <Footer />
    </div>
  );
};

export default Play;
