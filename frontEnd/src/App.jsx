import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import ListCartoon from "./components/ListCartoon"
import NavBar from "./components/NavBar"
import {slides} from "./data/slides.json"
import list from './data/list.json'
import collection from './data/collection.json'

function App() {

  return (
    <div>
      <NavBar />
      <Carousel data={slides}/>
      {collection.map((item, i) => {
        return (
          <ListCartoon key={i} title={item.name} data={list}/>
        )
      })
      }
      <Footer />
    </div>
  )
}

export default App
