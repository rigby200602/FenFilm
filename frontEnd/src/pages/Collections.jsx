import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import collections from '../data/collection.json'
import list from '../data/list.json'

const Collections = ({data}) => {
  // get collection thorough id
  const {id} = useParams();
  // create collection that have all film with same id
  const collection = collections.find(c => c.id === Number(id))
  // find film with same collection
  const filmsInCollection = list.filter(f => f.collection === Number(id));
  // check if collection valid or not?
  if (!collection) return <div>Collection not found</div>;
  return (
    <div className="text-white">
      <NavBar />
      <div className="mx-[5%]">
        <h2 className="text-4xl">{collection.name}</h2>
        <div className="my-[2%] flex">
          <img src={collection.src} className="w-80 h-100"/>
          <p className="ml-4 text-2xl">{collection.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
