import { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";
import IconCard from "./IconCard";
import "./responsive.css";

function GameBoard() {
  const { cards } = useContext(GameContext);
  return (
    <div className="absolute flex items-center justify-center">
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card, i) => (
          <IconCard cardId={card.id} icon={card.icon} key={i} />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
