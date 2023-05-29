import leaf from "../assets/Right Leaf.png";
import EmblaCarousel from "./EmblaCarousel";

const Footer = () => {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section>
      <div className="absolute z-10 h-[100vh] w-full bg-black bg-opacity-60">
        <div className="flex h-full items-center justify-center p-10 text-center text-white">
          <div className="flex min-w-[320px] max-w-[1024px] flex-col items-center justify-center gap-5">
            <img
              src={leaf}
              alt="Leaf Decoration"
              className="m-auto w-[300px] md:w-[400px] lg:w-[500px]"
            />
            <h1 className="text-center font-alexBrush text-3xl font-bold md:text-4xl lg:text-5xl">
              Matur Suksema
            </h1>
            <p className="font-nanumMyeongjo text-sm md:text-base lg:text-lg">
              Atas kehadiran dan doa restunya kami ucapkan terima kasih.
            </p>
            <p className="font-nanumMyeongjo text-sm md:text-base lg:text-lg">
              Kami yang berbahagia:
            </p>
            <h1 className="font-allura text-5xl font-bold lg:text-5xl">
              Dika & Ewikk
            </h1>
            <p className="font-nanumMyeongjo text-sm md:text-base lg:text-lg">
              &quot;Tinggal bersama disini, semoga engkau tidak pernah
              terpisahkan, tinggal bersama selamanya, bermain dengan anak-anak
              dan cucu, berbahagia di rumahmu&quot;.
            </p>
            <p className="font-nanumMyeongjo text-sm md:text-base lg:text-lg">
              RgVeda: X.85.42
            </p>
            <h1 className="mb-5 text-center font-alexBrush text-2xl font-bold md:text-4xl lg:text-5xl">
              Om Shanti, Shanti, Shanti Om
            </h1>
          </div>
        </div>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} height=" h-[100vh]" />
    </section>
  );
};

export default Footer;
