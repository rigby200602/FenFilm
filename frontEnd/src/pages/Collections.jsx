import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Collections = ({data}) => {
  // get collection thorough id
  const {id} = useParams();
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
