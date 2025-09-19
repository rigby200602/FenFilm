import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import ListCartoon from "./components/ListCartoon"
import NavBar from "./components/NavBar"
import {slides} from "./data/slides.json"
import { dannyPhantom } from "./data/list.json"

function App() {

  return (
    <div>
      <NavBar />
      <Carousel data={slides}/>
      <ListCartoon title={"Danny Phantom"} data={dannyPhantom}/>
      <Footer />
    </div>
  )
}

export default App
