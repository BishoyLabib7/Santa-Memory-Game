// import bell from "../assets/images/icons/bell.png";
import { useContext } from "react";
import "./responsive.css";
import "./IconCard.css";
import { GameContext } from "../context/GameContextProvider";

function IconCard({ cardId }) {
  const { cards, flipCard, showIcons } = useContext(GameContext);
  const currentCard = cards[cardId];

  const handleClick = () => {
    if (!currentCard.flipped && !showIcons) {
      flipCard(cardId);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="relative w-[4rem] h-[4rem] md:w-[4.5rem] md:h-[4.5rem] flex justify-center items-center cursor-pointer perspective-1000"
    >
      <div
        className={`flip-card-inner ${
          currentCard.flipped || showIcons ? "flip-card-flipped" : ""
        }`}
      >
        <div className="flip-card-front bg-white flex justify-center items-center rounded-full">
          <p className="text-3xl font-bold text-red-600">?</p>
        </div>
        <div className="flip-card-back bg-ball-background bg-center bg-cover flex justify-center items-center">
          <img src={currentCard.icon} alt="" className=" w-14 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default IconCard;
