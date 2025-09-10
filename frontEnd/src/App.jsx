import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import slides from "./data/slides"

function App() {

  return (
    <div>
      <NavBar />
      <Carousel data={slides}/>
      <Footer />
    </div>
  )
}

export default App
