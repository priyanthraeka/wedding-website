/* eslint-disable react/prop-types */

const Welcome = (props) => {
  const { onClick, to } = props;

  return (
    <div className="z-50 bg-[url('./assets/Gallery/1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="h-screen w-screen bg-black bg-opacity-60">
        <div className="flex h-full flex-col items-center justify-center gap-5 p-5 text-center text-white">
          <h1 className="font-meath text-8xl">Dika & Ewikk</h1>
          <h3 className="font-cherolina text-8xl">Dear</h3>
          <p className="font-alkatra text-2xl">{to ? to : "Exposs MIA 7"}</p>
          <button
            className="rounded-full border border-white bg-transparent px-5 py-2 text-xs text-white"
            onClick={onClick}
          >
            BUKA UNDANGAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
