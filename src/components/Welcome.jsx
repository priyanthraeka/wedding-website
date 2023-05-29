import { BsEnvelope } from "react-icons/bs";

const Welcome = (props) => {
  const { onClick, to } = props;
  return (
    <div className="z-50 bg-[url('./assets/Gallery/1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="h-screen w-screen bg-black bg-opacity-60">
        <div className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center text-white">
          <h2 className="font-sourceSerifPro text-lg tracking-wider md:text-xl lg:text-2xl">
            The Wedding of
          </h2>
          <h1 className="font-allura text-5xl font-bold md:text-7xl lg:text-8xl">
            Dika & Ewikk
          </h1>
          <h3 className="font-nanumMyeongjo text-base tracking-wider md:text-lg lg:text-xl">
            Kepada Yth.,
          </h3>
          <h3 className="font-nanumMyeongjo text-base tracking-wider md:text-lg lg:text-xl">
            Bapak/Ibu/Saudara/i:
          </h3>
          <p className="font-alkatra text-3xl md:text-4xl lg:text-5xl">
            {to ? to : "-"}
          </p>
          <p className="font-nanumMyeongjo text-base tracking-wider md:text-lg lg:text-xl">
            Tanpa mengurangi rasa hormat, kami mengundang Anda untuk hadir di
            acara pernikahan kami
          </p>
          <button
            className="flex items-center justify-center rounded-full border border-black bg-white px-4 py-2 font-nanumMyeongjo text-base text-black hover:bg-slate-400 md:text-lg lg:text-xl"
            onClick={onClick}
          >
            <BsEnvelope size={20} />
            <span className="ml-2">Buka Undangan</span>
          </button>
          <p className="font-nanumMyeongjo text-base tracking-wider md:text-lg lg:text-xl">
            Mohon maaf apabila terdapat kesalahan dalam penulisan nama dan/atau
            gelar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
