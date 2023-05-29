import {
  BsClock,
  BsGeoAlt,
  BsCalendarDate,
  BsMap,
  BsSuitHeartFill,
} from "react-icons/bs";

const Receptions = () => {
  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="rotate-180"
      >
        <path
          fill="#FCC2FC"
          fillOpacity="0.6"
          d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        ></path>
        <path
          fill="#FCC2FC"
          fillOpacity="0.8"
          d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        ></path>
        <path
          fill="#FCC2FC"
          fillOpacity="1"
          d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        ></path>
      </svg>
      <div
        id="event"
        className="flex items-center justify-center bg-[#fcc2fc] p-10"
      >
        <div className="min-w-[320px] max-w-[1024px]">
          <div className="m-auto mb-3 flex min-w-[200px] max-w-[450px] flex-col items-center justify-center rounded-xl bg-[#f8f9fa] p-5 shadow-md shadow-gray-400">
            <h1 className="my-2 font-alexBrush text-3xl font-bold md:text-4xl lg:text-5xl">
              Resepsi
            </h1>
            <div className="flex w-10/12 items-center justify-center">
              <hr className="w-full border border-black bg-black" />
              <BsSuitHeartFill size={50} className="mx-2" />
              <hr className="w-full border border-black bg-black" />
            </div>
            <div className="grid w-full grid-rows-3 gap-2 p-5">
              <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                <span className="flex justify-end">
                  <BsCalendarDate size={25} />
                </span>
                <span className="font-nanumMyeongjo text-sm md:text-base lg:text-lg">
                  Rabu, 24 Mei 2023
                </span>
              </div>
              <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                <span className="flex justify-end">
                  <BsClock size={25} />
                </span>
                <span className="font-nanumMyeongjo text-sm md:text-base lg:text-lg">
                  14.00 WITA s/d Selesai
                </span>
              </div>
              <div className="grid grid-cols-[.5fr_3fr] items-center gap-3">
                <span className="flex justify-end">
                  <BsGeoAlt size={25} />
                </span>
                <span className="font-nanumMyeongjo text-sm md:text-base lg:text-lg">
                  Jalan Nangka Selatan Gang VII No. 17
                </span>
              </div>
            </div>
            <button className="text-nanumMyeongjo mt-2 flex items-center justify-center rounded-full border border-black bg-white px-4 py-2 text-sm text-black hover:bg-slate-400 lg:text-lg">
              <a
                href="https://goo.gl/maps/ggZeZKsVWknwa9ZX6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <BsMap size={20} />
                <span className="font-poppins text-[0.8rem] md:text-sm lg:text-base">
                  Buka Peta
                </span>
              </a>
            </button>
          </div>
          <p className="text-center font-nanumMyeongjo text-sm font-bold md:text-base lg:text-lg">
            Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir pada acara pernikahan putra-putri kami.
            <br />
            Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i kami ucapkan terima
            kasih.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Receptions;
