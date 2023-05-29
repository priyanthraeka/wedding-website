import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

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

const Gallery = () => {
  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="rotate-180 bg-[#FCC2FC]"
      >
        <path
          fill="#FFFFFF"
          fillOpacity="0.3"
          d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
        ></path>
        <path
          fill="#FFFFFF"
          fillOpacity="0.5"
          d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
        ></path>
        <path
          fill="#FFFFFF"
          fillOpacity="1"
          d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
        ></path>
      </svg>
      <div id="gallery" className="flex items-center justify-center p-10">
        <div className="min-w-[320px] max-w-[1024px]">
          <h1 className="mb-5 text-center font-alexBrush text-3xl font-bold md:text-4xl lg:text-5xl">
            Galeri
          </h1>
          <p className="mb-3 text-center font-nanumMyeongjo text-sm font-bold md:text-base lg:text-lg">
            Tidak ada yang spesial dalam cerita kami. Tapi kami sangat spesial
            untuk satu sama lain. Dan Kami bersyukur, dipertemukan Ida Sang
            Hyang Widhi Wasa diwaktu terbaik, Kini kami menanti hari istimewa
            kami.
          </p>
          <LightGallery
            speed={600}
            download={false}
            counter={false}
            licenseKey="0000-0000-000-0000"
            elementClassNames="flex flex-wrap items-center justify-center gap-2"
          >
            <a href={img1}>
              <img alt="" src={img1} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img2}>
              <img alt="" src={img2} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img3}>
              <img alt="" src={img3} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img4}>
              <img alt="" src={img4} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img5}>
              <img alt="" src={img5} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img6}>
              <img alt="" src={img6} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img7}>
              <img alt="" src={img7} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img8}>
              <img alt="" src={img8} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img9}>
              <img alt="" src={img9} className="h-auto w-[400px] rounded-sm" />
            </a>
            <a href={img10}>
              <img alt="" src={img10} className="h-auto w-[400px] rounded-sm" />
            </a>
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
