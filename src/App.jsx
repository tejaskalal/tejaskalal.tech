import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skillbar from "./components/Skillbar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skillbar />
      <Projects />
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
