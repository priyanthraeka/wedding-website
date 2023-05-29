import { useState } from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import Countdown from "./Countdown";
import Info from "./Info";
import Receptions from "./Receptions";
import Gallery from "./Gallery";
import Wallet from "./Wallet";
import Wishes from "./Wishes";
import Footer from "./Footer";
import Navbar from "./Navbar";
import MusicToggler from "./MusicToggler";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";

const Wrapper = () => {
  const [onClickModal, setOnClickModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const portal = createPortal(
    <Welcome
      onClick={() => setOnClickModal(true)}
      to={searchParams.get("to")}
    />,
    document.getElementById("overlay")
  );
  const beranda = (
    <>
      <MusicToggler />
      <Header />
      <Info />
      <Countdown />
      <Receptions />
      <Gallery />
      <Wishes />
      <Wallet />
      <Footer />
      <Navbar />
    </>
  );

  return <>{!onClickModal ? portal : beranda}</>;
};

export default Wrapper;
