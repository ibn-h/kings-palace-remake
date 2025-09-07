import snowflake from "../assets/snowflake.png";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const props = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0%)" },
  });

  return (
    <section
      id="about"
      className="px-4 py-8 md:px-8 md:py-32"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-4 lg:max-w-[740px] lg:gap-10 xl:max-w-[990px]">
        <img src={snowflake} alt="Snowflake" />

        <animated.p
          className="font-georgia text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          style={props}
        >
          Kings Palace is een Chinese restaurant gelegen in het hart van
          Antwerpen. Onze doel is om een heerlijke ervaring aan te bieden. Kom
          met vrienden, familie, collega's en geniet van een memorabele
          ervaring.
        </animated.p>

        {/* <a
          href=""
          className="bg-secondary font-georgia hidden w-3/4 rounded-full px-4 py-3 text-center text-white sm:w-[194px] lg:inline-block"
        >
          TAFEL RESERVEREN
        </a> */}
      </div>
    </section>
  );
}

export default About;
