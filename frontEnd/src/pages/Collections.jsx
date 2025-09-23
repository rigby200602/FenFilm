import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import collections from '../data/collection.json'

const Collections = ({data}) => {
  // get collection thorough id
  const {id} = useParams();
  // create collection that have all film with same id
  const collection = collections.find(c => c.id === Number(id))
  // find film with same collection
  return (
    <div className="mx-[5%] text-white">
      <NavBar />
      <div className="flex">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
