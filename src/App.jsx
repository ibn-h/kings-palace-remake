import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Menu from "./components/menu";
import Gallery from "./components/gallery";
import CTA from "./components/CTA";
import Footer from "./components/footer";

import { useSpring, animated } from "react-spring";
import { useState } from "react";

function App() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <>
      <animated.div style={props} onClick={() => setFlip(!flip)}>
        <Header />
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <CTA />
        <Footer />
      </animated.div>
    </>
  );
}

export default App;
