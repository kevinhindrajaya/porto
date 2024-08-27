import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Logo from "./assets/name.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Kevin Hindra Jaya Portofolio</title>
        <link rel="icon" type="image/png" href={Logo} sizes="16x16" />
      </Helmet>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <ContactUS />
      </div>
    </HelmetProvider>
  );
}

export default App;
