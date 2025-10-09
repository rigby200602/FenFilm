import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import collections from "../data/collections.json";
import lists from "../data/lists.json";
import Box from "../components/Box";

const Collections = () => {
  // get collection thorough id
  const { id } = useParams();
  // create collection that have all film with same id
  const collection = collections.find((c) => c.id === Number(id));
  // find film with same collection
  const filmsInCollection = lists.filter(
    (film) => film.collection === collection?.id
  );
  // show 4 films only
  const data = filmsInCollection.filter((item) => item.id < 5);
  // check if collection valid or not?
  if (!collection)
    return (
      <div className="flex justify-center items-center text-5xl text-white min-h-screen">
        Collection not found
      </div>
    );
  return (
    <div className="text-white">
      <NavBar />
      <div className="mx-[5%]">
        <h2 className="text-4xl text-center my-[4%] md:my-[2%] md:text-start">
          {collection.name}
        </h2>
        <div className="flex justify-center">
          <img src={collection.src} className="w-80 h-100" />
          <p className="ml-4 text-2xl hidden md:block">
            {collection.description}
          </p>
        </div>
        <p className="ml-4 mt-[6%] text-lg block md:hidden">
          {collection.description}
        </p>
      </div>
      {/* check if film has any value */}
      {filmsInCollection.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-[5%]">
          {/* render box for each episode */}
          {data.map((film, id) => (
            <Box key={id} data={film} />
          ))}
        </div>
      ) : (
        // if no film in collection
        <div>
          <h2 className="text-3xl mx-[5%] my-8 hidden md:block">
            Chưa có gì rồi :&lt;
          </h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Collections;
