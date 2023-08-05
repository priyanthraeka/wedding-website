import bcaLogo from "../assets/bca.png";
import danaLogo from "../assets/dana.png";
import { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Heading from "./atoms/Heading";
import SubHeading from "./atoms/SubHeading";
import WhiteCloud from "./atoms/WhiteCloud";
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
      <WhiteCloud />
      <ToastContainer />
      <div className="flex items-center justify-center bg-white px-5 py-10">
        <div className="flex w-full max-w-[1080px] flex-col items-center">
          <Heading accent="pink">Wedding Gift</Heading>
          <SubHeading accent="pink">
            Tanpa mengurangi rasa hormat,
            <br />
            Bagi anda yang ingin memberi tanda kasih kepada mempelai, dapat
            melalui Virtual Account atau E-Wallet.
          </SubHeading>
          <a
            href="https://goo.gl/maps/ggZeZKsVWknwa9ZX6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <button className="mb-2 mt-10 rounded-full border border-[#948285] bg-transparent px-5 py-2 font-poppins text-xs text-[#948285] lg:text-sm">
              Kirim Hadiah
            </button>
          </a>
          <SubHeading accent="pink">
            Silakan melakukan konfirmasi kirim hadiah.
            <br />
            Klik disini.
          </SubHeading>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
