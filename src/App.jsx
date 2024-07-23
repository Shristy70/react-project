import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </>
  );
};
export default App;
