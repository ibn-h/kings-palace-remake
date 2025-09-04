import snowFlake from "../assets/red-snowflake.png";

function CTA() {
  return (
    <section className="px-4 md:px-[79px]">
      <div className="bg-primary py-16 text-left text-white sm:text-center md:py-32">
        <div className="mx-auto flex w-[982px] flex-col items-start justify-center sm:items-center">
          <h2 className="font-georgia text-3xl lg:text-4xl">
            GENIET VAN EEN SMAAKVOL MOMENT
          </h2>
          <img src={snowFlake} alt="" className="my-6" />
          <p className="mb-8 text-[#d4d3d4] md:text-lg">
            De King's Palace kernwaarden: begrip, respect en beleefdheid hebben
            voor een ijzersterke en positieve team spirit gezorgd. King's Palace
            gelooft dat dit afstraalt op de bediening en dat "een goed gevoel
            hebben" een onmisbaar ingrediënt is voor een geslaagde maaltijd.
          </p>
          <a
            href=""
            className="font-georgia text-primary w-1/2 rounded-full bg-white px-4 py-3 text-center sm:w-[194px]"
          >
            TAFEL RESERVEREN
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
