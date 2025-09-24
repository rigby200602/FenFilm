import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import ListCartoon from "./components/ListCartoon"
import NavBar from "./components/NavBar"
import {slides} from "./data/slides.json"
import lists from './data/lists.json'
import collections from './data/collections.json'

function App() {

  return (
    <div>
      <NavBar />
      <Carousel data={slides}/>
      {collections.map((item, i) => {
        return (
          <ListCartoon key={i} title={item.name} data={lists}/>
        )
      })
      }
      <Footer />
    </div>
  )
}

export default App
