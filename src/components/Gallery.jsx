import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import Heading from "./atoms/Heading";
import SubHeading from "./atoms/SubHeading";
import WhiteCloud from "./atoms/WhiteCloud";

import img1 from "../assets/Gallery/1.jpg";
import img2 from "../assets/Gallery/2.jpg";
import img3 from "../assets/Gallery/3.jpg";
import img4 from "../assets/Gallery/4.jpg";
import img5 from "../assets/Gallery/5.jpg";
import img6 from "../assets/Gallery/6.jpg";
import img7 from "../assets/Gallery/7.jpg";
import img8 from "../assets/Gallery/8.jpg";
import img9 from "../assets/Gallery/9.jpg";
import img10 from "../assets/Gallery/10.jpg";

const WEDDING_GALLERY = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const Gallery = () => {
  return (
    <section>
      <WhiteCloud />
      <div className="flex items-center justify-center bg-white px-5 py-10">
        <div className="w-full lg:max-w-[1080px]">
          <Heading accent="pink">Wedding Gallery</Heading>
          <SubHeading accent="pink">
            What counts in making a happy marriage is not so much how compatible
            you are, but how you deal with incompatibility. A great marriage is
            not when the perfect couple comes together. It is when an imperfect
            couple learns to enjoy their differences.
          </SubHeading>
          <LightGallery
            speed={500}
            download={false}
            elementClassNames="flex flex-wrap items-center justify-center gap-2 mt-5"
          >
            {WEDDING_GALLERY.map((gallery, index) => (
              <a key={index} href={gallery}>
                <img
                  alt={gallery}
                  src={gallery}
                  className="h-auto w-[400px] rounded-sm"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
