import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ListCartoon from "./components/ListCartoon";
import NavBar from "./components/NavBar";
import { slides } from "./data/slides.json";
import lists from "./data/lists.json";
import collections from "./data/collections.json";
import { AppContextProvider } from "./context/AppContext";
import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <React.StrictMode>
      <AppContextProvider>
        <NavBar />
        <div className="flex md:hidden">
          <SearchBar />
        </div>
        <Carousel data={slides} />
        {collections.map((item, i) => {
          return (
            <ListCartoon
              key={i}
              title={item.name}
              data={lists}
              collection={item.id}
            />
          );
        })}
        <Footer />
      </AppContextProvider>
    </React.StrictMode>
  );
}

export default App;
