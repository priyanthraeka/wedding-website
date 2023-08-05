import cwo from "../assets/cwo.png";
import cwe from "../assets/cwe.png";
import SubHeading from "./atoms/SubHeading";

const Info = () => {
  return (
    <section>
      <div className="m-auto flex w-full items-center justify-center py-10 lg:w-10/12">
        <div className="">
          <SubHeading accent="pink">
            The honor of your presence is requested.
            <br />
            At the marriage of
          </SubHeading>
          <div className="grid grid-cols-1 grid-rows-[1fr_0.1fr_1fr] text-[#948285] md:grid-cols-2 md:grid-rows-1">
            {/* Cowo */}
            <div className="flex flex-col items-center text-center">
              <img
                src={cwo}
                alt="Groom"
                width={10}
                height={10}
                className="mb-3 w-11/12"
              />
              <p className="mb-2 font-meath text-2xl tracking-wide md:text-3xl lg:text-4xl">
                I Putu Dika Ariawan, S.M
              </p>
              <p className="font-daiBannaSil text-base italic md:text-xl lg:text-2xl">
                Putri kedua dari pasangan
                <br />I Ketut Subagia & Ni Luh Simpen
              </p>
            </div>
            <div className="text-bold mt-5 flex justify-center font-alexBrush text-5xl md:hidden lg:hidden">
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
              <p className="mb-2 font-meath text-2xl tracking-wide md:text-3xl lg:text-4xl">
                Ni Kadek Santika Dewi, S.Ak
              </p>
              <p className="font-daiBannaSil text-base italic md:text-xl lg:text-2xl">
                Putri kedua dari pasangan
                <br />I Ketut Subagia & Ni Luh Simpen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
