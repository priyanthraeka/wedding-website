import cwo from "../assets/cwo.png";
import cwe from "../assets/cwe.png";
import flower from "../assets/flower.png";
const Info = () => {
  return (
    <section>
      <div id="mempelai" className="flex items-center justify-center p-10">
        <div className="min-w-[320px] max-w-[1024px]">
          <h1 className="mb-5 text-center font-alexBrush text-3xl font-bold md:text-4xl lg:text-5xl">
            Om Swastiastu
          </h1>
          <p className="mb-3 text-center font-nanumMyeongjo text-sm md:text-base lg:text-lg">
            Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa / Tuhan Yang
            Maha Esa <br /> Kami Akan Menyelenggarakan Upacara Manusa Yadnya
            Pawiwahan Putra Putri Kami
          </p>
          <div className="flex flex-wrap items-center justify-center md:flex md:flex-nowrap lg:flex lg:flex-nowrap">
            {/* Cowo */}
            <div className="flex flex-col items-center text-center">
              <img
                src={cwo}
                alt="Groom"
                width={10}
                height={10}
                className="mb-3 w-11/12"
              />
              <p className="mb-2 font-ephesis text-2xl font-bold md:text-3xl lg:text-4xl">
                I Putu Dika Ariawan, S.M
              </p>
              <p className="font-nanumMyeongjo text-sm italic md:text-base lg:text-lg">
                Putra pertama dari pasangan
                <br />I Nengah Ardana & Ni Wayan Mudi
              </p>
            </div>
            <div className="text-bold mt-5 font-alexBrush text-3xl md:hidden lg:hidden">
              &
            </div>
            {/* Cewe */}
            <div className="flex flex-col items-center text-center">
              <img
                src={cwe}
                alt="Bride"
                width={10}
                height={10}
                className="mb-3 w-11/12"
              />
              <p className="mb-2 font-ephesis text-2xl font-bold md:text-3xl lg:text-4xl">
                Ni Kadek Santika Dewi, S.Ak
              </p>
              <p className="font-nanumMyeongjo text-sm  italic md:text-base lg:text-lg">
                Putri kedua dari pasangan
                <br />I Ketut Subagia & Ni Luh Simpen
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <img src={flower} alt="Flower" className="w-6/12 md:w-4/12 lg:w-2/12" />
      </div>
    </section>
  );
};

export default Info;
