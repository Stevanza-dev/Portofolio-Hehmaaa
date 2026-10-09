import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-page text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
