import snowFlake from "../assets/red-snowflake.png";

function CTA() {
  return (
    <section className="bg-primary px-4 md:px-[79px] xl:bg-transparent">
      <div className="bg-primary py-16 text-center text-white sm:text-center md:py-32">
        <div className="mx-auto flex flex-col items-center justify-center sm:items-center xl:w-[982px]">
          <h2 className="font-georgia text-3xl lg:text-4xl">
            GENIET VAN EEN SMAAKVOL MOMENT
          </h2>
          <img src={snowFlake} alt="" className="my-6" />
          <p className="mb-8 leading-8 text-[#d4d3d4] md:text-xl">
            De King's Palace kernwaarden: begrip, respect en beleefdheid hebben
            voor een ijzersterke en positieve team spirit gezorgd. King's Palace
            gelooft dat dit afstraalt op de bediening en dat "een goed gevoel
            hebben" een onmisbaar ingrediënt is voor een geslaagde maaltijd.
          </p>
          <a
            href=""
            className="hover:text-primary font-georgia bg-secondary w-[194px] rounded-full px-4 py-3 text-center text-white transition duration-300 hover:bg-white"
          >
            TAFEL RESERVEREN
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
