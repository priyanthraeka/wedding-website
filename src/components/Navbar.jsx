import {
  BsHouseDoor,
  BsPersonCircle,
  BsCardImage,
  BsChatDots,
} from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

const Navbar = () => {
  const onMempelaiClickHandler = (e) => {
    e.preventDefault();
    const mempelai = document.getElementById("mempelai");
    mempelai.scrollIntoView({
      behavior: "smooth",
    });
  };
  const onHomeClickHandler = (e) => {
    e.preventDefault();
    const home = document.getElementById("root");
    home.scrollIntoView({
      behavior: "smooth",
    });
  };
  const onEventClickHandler = (e) => {
    e.preventDefault();
    const event = document.getElementById("event");
    event.scrollIntoView({
      behavior: "smooth",
    });
  };
  const onGalleryClickHandler = (e) => {
    e.preventDefault();
    const gallery = document.getElementById("gallery");
    gallery.scrollIntoView({
      behavior: "smooth",
    });
  };
  const onUcapanClickHandler = (e) => {
    e.preventDefault();
    const ucapan = document.getElementById("ucapan");
    ucapan.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section>
      <div className="flex justify-center">
        <div className="fixed bottom-2 z-20 flex h-20 w-11/12 items-center justify-around rounded-lg bg-[#f8f9fa] p-2 lg:w-3/6">
          <a
            className="m-1 flex h-auto w-20 flex-col items-center rounded-md p-1 hover:bg-blue-200"
            href="#root"
            onClick={onHomeClickHandler}
          >
            <BsHouseDoor size={30} />
            <span className="mt-1 font-poppins text-[.8rem] md:text-base lg:text-lg">
              Home
            </span>
          </a>
          <a
            className="m-1 flex h-auto w-20 flex-col items-center rounded-md p-1 hover:bg-blue-200"
            href="#mempelai"
            onClick={onMempelaiClickHandler}
          >
            <BsPersonCircle size={30} />
            <span className="mt-1 font-poppins text-[.8rem] md:text-base lg:text-lg">
              Mempelai
            </span>
          </a>
          <a
            className="m-1 flex h-auto w-20 flex-col items-center rounded-md p-1"
            href="#event"
            onClick={onEventClickHandler}
          >
            <div className="fixed bottom-12 flex flex-col items-center rounded-full bg-yellow-500  p-5 hover:bg-blue-600">
              <FaHandshake size={40} style={{ color: "white" }} />
            </div>
            <span className="mt-[34px] font-poppins text-[.8rem] md:text-base lg:text-lg">
              Event
            </span>
          </a>
          <a
            className="m-1 flex h-auto w-20 flex-col items-center rounded-md p-1 hover:bg-blue-200"
            href="#gallery"
            onClick={onGalleryClickHandler}
          >
            <BsCardImage size={30} />
            <span className="mt-1 font-poppins text-[.8rem] md:text-base lg:text-lg">
              Galeri
            </span>
          </a>
          <a
            className="m-1 flex h-auto w-20 flex-col items-center rounded-md p-1 hover:bg-blue-200"
            href="#ucapan"
            onClick={onUcapanClickHandler}
          >
            <BsChatDots size={30} />
            <span className="mt-1 font-poppins text-[.8rem] md:text-base lg:text-lg">
              Ucapan
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
