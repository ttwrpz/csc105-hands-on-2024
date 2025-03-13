import Navbar from "./components/Navbar.jsx";
import Home from "./page/Home.jsx";
import AboutMe from "./page/AboutMe.jsx";
import Gallery from "./page/Gallery.jsx";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Navbar />
      <div className="mx-4 my-16 max-w-2xl space-y-16 md:mx-auto">
        <Home />
        <AboutMe />
        <Gallery />
      </div>
      <footer className="bg-gray-50 px-2 py-4 text-center font-mono">
        &copy; 2025 Theerawat Patthawee
      </footer>
    </div>
  );
}

export default App;
