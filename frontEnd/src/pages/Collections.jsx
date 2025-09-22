import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Collections = ({collections}) => {
  // get collection thorough id
  const {id} = useParams();
  return (
    <div className="mx-[5%] text-white">
      <NavBar />
      <div className="flex">
        <h2>{collections.name}</h2>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
