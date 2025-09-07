import firstImg from "../assets/galerij-1.png";
import secImg from "../assets/galerij-2.png";
import thirdImg from "../assets/galerij-3.png";
import fourthImg from "../assets/galerij-4.png";

const images = [firstImg, secImg, thirdImg, fourthImg];

function Gallery() {
  return (
    <section className="p-4 py-16 md:px-[79px] md:py-32">
      <div className="flex w-full flex-col items-center justify-center gap-4 md:items-start md:justify-between md:gap-8">
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="font-georgia w-full text-center text-3xl md:w-auto md:text-left lg:text-6xl">
            ONZE GALERIJ
          </h2>
          <a
            href=""
            className="font-georgia bg-secondary hidden w-full rounded-full px-8 py-3 text-center text-white md:inline-block md:w-[194px]"
          >
            ONTDEK MEER
          </a>
        </div>

        <div className="grid w-full grid-cols-2 items-center justify-center gap-4 lg:grid-cols-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Galerij ${idx + 1}`}
              className="h-auto w-[400px] object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
