import Card from "./Card";
import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Header = () => {
  return (
    <section>
      <div className="absolute z-10 h-screen w-full min-w-[320px] bg-gradient-to-t from-black via-transparent to-transparent">
        <Card>
          <div className="z-20 flex h-screen flex-col items-center justify-end gap-2 pb-[300px] text-center text-white">
            <p className="font-poppins text-sm tracking-widest md:text-base lg:text-lg">
              THE WEDDING OF
            </p>
            <h1 className="font-madi text-6xl">Dika & Ewikk</h1>
            <p className="font-poppins text-sm">Sabtu, 02 Desember 2023</p>
          </div>
        </Card>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Header;
