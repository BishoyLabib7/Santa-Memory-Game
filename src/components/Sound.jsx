import { useEffect, useRef, useState } from "react";
import christmas_sound from "../assets/christmas_sound.mp3";
import soundIcon from "../assets/images/musicIcon.webp";
function Sound() {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  return (
    <div className=" absolute xl:right-[10rem] top-[4rem] flex flex-col items-start w-[5rem] z-50">
      <audio src={christmas_sound} ref={audioEl}></audio>
      <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default Sound;

function Controls({ setIsPlaying, isPlaying }) {
  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        <img src={soundIcon} alt="" />
      </button>
    </div>
  );
}
