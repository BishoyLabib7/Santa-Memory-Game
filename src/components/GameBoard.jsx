import IconCard from "./IconCard";
import { GameContext } from "../context/GameContextProvider";
import "./responsive.css";
import { useContext } from "react";

const GameBoard = () => {
  const { cards } = useContext(GameContext);

  return (
    <div className="gameboard absolute grid grid-cols-4 gap-3">
      {cards.map((icon, index) => (
        <IconCard key={index} iconId={index} />
      ))}
    </div>
  );
};

export default GameBoard;
