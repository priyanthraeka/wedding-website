import {
  BsClock,
  BsGeoAlt,
  BsCalendarDate,
  BsSuitHeartFill,
  BsPinMap,
} from "react-icons/bs";
import Countdown from "./Countdown";
import PinkCloud from "./atoms/PinkCloud";

const Receptions = () => {
  return (
    <section>
      <PinkCloud />
      <div
        id="event"
        className="flex items-center justify-center bg-[#fcc2fc] p-10"
      >
        <div className="min-w-[320px] max-w-[1024px]">
          <Countdown />
          <div className="flex flex-wrap justify-center gap-10">
            <div className="m-auto mb-3 flex min-w-[200px] max-w-[450px] flex-col items-center justify-center rounded-xl bg-white p-5 shadow-md shadow-gray-500 ">
              <h1 className="my-2 font-meath text-3xl text-[#948285] md:text-4xl lg:text-5xl">
                Akad Nikah
              </h1>
              <div className="flex w-10/12 items-center justify-center">
                <hr className="w-full border border-[#948285]" />
                <BsSuitHeartFill size={50} className="mx-2" color="#948285" />
                <hr className="w-full border border-[#948285]" />
              </div>
              <div className="grid w-full grid-rows-3 gap-2 p-5 text-[#948285]">
                <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                  <span className="flex justify-end">
                    <BsCalendarDate size={25} color="#948285" />
                  </span>
                  <span className="font-vithquki text-sm md:text-base lg:text-lg">
                    Rabu, 24 Mei 2023
                  </span>
                </div>
                <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                  <span className="flex justify-end">
                    <BsClock size={25} color="#948285" />
                  </span>
                  <span className="font-vithquki text-sm md:text-base lg:text-lg">
                    14.00 WITA s/d Selesai
                  </span>
                </div>
                <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                  <span className="flex justify-end">
                    <BsGeoAlt size={25} color="#948285" />
                  </span>
                  <span className="font-vithquki text-sm md:text-base lg:text-lg">
                    Jalan Nangka Selatan Gang VII No. 17
                  </span>
                </div>
              </div>
              <button className="rounded-full border border-[#948285] bg-transparent px-5 py-2 font-poppins text-xs text-[#948285] lg:text-sm">
                <a
                  href="https://goo.gl/maps/ggZeZKsVWknwa9ZX6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BsPinMap size={20} />
                  Google Maps
                </a>
              </button>
            </div>
            <div className="m-auto mb-3 flex min-w-[200px] max-w-[450px] flex-col items-center justify-center rounded-xl bg-white p-5 shadow-md shadow-gray-500 ">
              <h1 className="my-2 font-meath text-3xl text-[#948285] md:text-4xl lg:text-5xl">
                Resepsi
              </h1>
              <div className="flex w-10/12 items-center justify-center">
                <hr className="w-full border border-[#948285]" />
                <BsSuitHeartFill size={50} className="mx-2" color="#948285" />
                <hr className="w-full border border-[#948285]" />
              </div>
              <div className="grid w-full grid-rows-3 gap-2 p-5 text-[#948285]">
                <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                  <span className="flex justify-end">
                    <BsCalendarDate size={25} color="#948285" />
                  </span>
                  <span className="font-vithquki text-sm md:text-base lg:text-lg">
                    Kamis, 25 Mei 2023
                  </span>
                </div>
                <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                  <span className="flex justify-end">
                    <BsClock size={25} color="#948285" />
                  </span>
                  <span className="font-vithquki text-sm md:text-base lg:text-lg">
                    15.00 WITA s/d Selesai
                  </span>
                </div>
                <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                  <span className="flex justify-end">
                    <BsGeoAlt size={25} color="#948285" />
                  </span>
                  <span className="font-vithquki text-sm md:text-base lg:text-lg">
                    Jalan Nangka Selatan Gang VII No. 17
                  </span>
                </div>
              </div>
              <button className="rounded-full border border-[#948285] bg-transparent px-5 py-2 font-poppins text-xs text-[#948285] lg:text-sm">
                <a
                  href="https://goo.gl/maps/ggZeZKsVWknwa9ZX6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <BsPinMap size={20} />
                  Google Maps
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Receptions;
