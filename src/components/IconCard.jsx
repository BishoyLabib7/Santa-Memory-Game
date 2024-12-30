import { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import santa from "../assets/images/icons/santa-icon.png";
import "./IconCard.css";

const IconCard = ({ iconId }) => {
  const { cards, flipCard, showIcons } = useContext(GameContext);
  const card = cards[iconId];

  const handleClick = () => {
    if (!card.flipped && !showIcons) {
      flipCard(iconId);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="relative w-[3.5rem] h-[3.5rem] md:w-[4rem] md:h-[4rem] flex justify-center items-center cursor-pointer perspective-1000"
    >
      <div
        className={`flip-card-inner ${
          card.flipped || showIcons ? "flip-card-flipped" : ""
        }`}
      >
        <div className="flip-card-front bg-white border flex justify-center items-center rounded-full">
          <img src={santa} alt="" className="" />
        </div>
        <div className="flip-card-back bg-ball-background bg-center bg-cover flex justify-center items-center">
          <img src={card.icon} alt={card.icon} className=" w-14 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default IconCard;
