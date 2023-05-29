import bcaLogo from "../assets/bca.png";
import danaLogo from "../assets/dana.png";
import { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Wallet = () => {
  const BCA = "6690706120";
  const DANA = "085792257890";
  const [isCopiedBca, setIsCopiedBca] = useState(false);
  const [isCopiedDana, setIsCopiedDana] = useState(false);

  const onBcaCopyHandler = () => {
    setIsCopiedBca(true);
    toast.success("Berhasil menyalin BCA");
  };

  const onDanaCopyHander = () => {
    setIsCopiedDana(true);
    toast.success("Berhasil menyalin DANA");
  };

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
      <ToastContainer />
      <div id="wallet" className="flex items-center justify-center p-10">
        <div className="min-w-[320px] max-w-[1024px]">
          <h1 className="mb-5 text-center font-alexBrush text-3xl font-bold md:text-4xl lg:text-5xl">
            Dompet Digital
          </h1>
          <p className="mb-3 text-center font-nanumMyeongjo text-sm font-bold md:text-base lg:text-lg">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami, Dan
            jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
            kado secara cashless.
          </p>
          {/* Akun */}
          <div className="w-full font-poppins">
            <div className="bg-black p-2">
              <span className="text-[.8rem] font-bold text-white md:text-sm lg:text-base">
                Akun
              </span>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center gap-3 bg-[#f8f9fa] p-5 md:flex-row md:items-center md:justify-start md:gap-2 lg:flex-row lg:items-center lg:justify-start lg:gap-2">
                <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:items-center md:justify-start lg:flex-row lg:items-center lg:justify-start">
                  <img
                    src={bcaLogo}
                    alt="Logo Bank BCA"
                    className="h-auto w-[200px] p-2"
                  />
                  <div className="flex flex-col items-center md:items-start lg:items-start">
                    <p className="text-[.8rem] md:text-sm lg:text-base">
                      Bank Central Asia (BCA)
                    </p>
                    <tt className="font-courierPrime text-lg lg:text-2xl">
                      6690706120
                    </tt>
                    <p className="text-[.8rem] md:text-sm lg:text-base">
                      I Putu Eka Priyanthara
                    </p>
                  </div>
                </div>
                <CopyToClipboard text={BCA} onCopy={onBcaCopyHandler}>
                  {isCopiedBca ? (
                    <button
                      className="flex cursor-not-allowed items-center justify-center rounded-sm border border-slate-400 p-2 text-slate-400"
                      disabled
                    >
                      <BsClipboard />{" "}
                      <span className="ms-2 text-[.8rem] md:text-sm lg:text-base">
                        {isCopiedBca ? "Copied!" : "Copy"}
                      </span>
                    </button>
                  ) : (
                    <button className="flex items-center justify-center rounded-sm border border-black p-2">
                      <BsClipboard />{" "}
                      <span className="ms-2 text-[.8rem] md:text-sm lg:text-base">
                        {isCopiedBca ? "Copied!" : "Copy"}
                      </span>
                    </button>
                  )}
                </CopyToClipboard>
              </div>
              <hr className="border border-gray-200" />
              <div className="flex flex-col items-center justify-center gap-3 bg-[#f8f9fa] p-5 md:flex-row md:items-center md:justify-start md:gap-2 lg:flex-row lg:items-center lg:justify-start lg:gap-2">
                <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:items-center md:justify-start lg:flex-row lg:items-center lg:justify-start">
                  <img
                    src={danaLogo}
                    alt="Logo Dana"
                    className="h-auto w-[200px] p-2"
                  />
                  <div className="flex flex-col items-center md:items-start lg:items-start">
                    <p className="text-[.8rem] md:text-sm lg:text-base">DANA</p>
                    <tt className="font-courierPrime text-lg lg:text-2xl">
                      085792257890
                    </tt>
                    <p className="text-[.8rem] md:text-sm lg:text-base">
                      I Putu Eka Priyanthara
                    </p>
                  </div>
                </div>
                <CopyToClipboard text={DANA} onCopy={onDanaCopyHander}>
                  {isCopiedDana ? (
                    <button className="flex cursor-not-allowed items-center justify-center rounded-sm border border-slate-400 p-2 text-slate-400">
                      <BsClipboard />{" "}
                      <span className="ms-2 text-[.8rem] md:text-sm lg:text-base">
                        {isCopiedDana ? "Copied!" : "Copy"}
                      </span>
                    </button>
                  ) : (
                    <button className="flex items-center justify-center rounded-sm border border-black p-2">
                      <BsClipboard />{" "}
                      <span className="ms-2 text-[.8rem] md:text-sm lg:text-base">
                        {isCopiedDana ? "Copied!" : "Copy"}
                      </span>
                    </button>
                  )}
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
