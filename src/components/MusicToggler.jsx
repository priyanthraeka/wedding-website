import { useEffect, useRef, useState } from "react";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import song from "../assets/audio.mp3";

const MusicToggler = () => {
  const audioEl = useRef();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  return (
    <section>
      <audio ref={audioEl} loop>
        <source src={song} type="audio/mp3" />
      </audio>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-96 left-2 z-50 flex animate-spin-slow cursor-pointer items-center justify-center rounded-full bg-[#ff7bff] p-2"
      >
        {isPlaying ? (
          <TbMusic size={25} color="white" />
        ) : (
          <TbMusicOff size={25} color="white" />
        )}
      </button>
    </section>
  );
};

export default MusicToggler;
