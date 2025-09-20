import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Collections = () => {
  // get collection thorough id
  const {id} = useParams();
  return (
    <div className="mx-[5%] text-white">
      <NavBar />
      <div className="flex">

      </div>
      <Footer />
    </div>
  );
};

export default Collections;
