import Home from "./components/home/Home";
import About from "./components/about/About";
import Header from "./components/home/Header";
import Myservices from "./components/services/Myservices";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Projects from "./components/project/Projects";
import Footer from "./components/footer/Footer";
import "./App.css";


// photo added 

  const App = () => {

  return (
    <>
      {/* Header Section */}
      <Header />
      


      {/* Main Content */}
      <section id="home" className="section">
        <Home />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="services" className="section">
        <Myservices />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="about" className="section">
        <About />
      </section>
      
      <section id="contact" className="section">
        <Contact />
      </section>
      {/* footer section */}
      <Footer />
    </>
  );
};

export default App;
