import "./app.css";
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import MyWorks from "./sections/myworks/MyWorks";
import About from "./sections/about/About";
import MySkills from "./sections/myskills/MySkills";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="sections">
        <Hero />
        <MyWorks />
        <About />
        <MySkills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
