import Navbar from "./components/Navbar.jsx";
import Home from "./page/Home.jsx";
import AboutMe from "./page/AboutMe.jsx";
import Gallery from "./page/Gallery.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Navbar />
      <div className="mx-4 my-16 max-w-2xl space-y-16 md:mx-auto">
        <Home />
        <AboutMe />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
