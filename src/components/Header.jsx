import { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";

function Header() {
  const { name } = useContext(GameContext);
  return (
    <div className=" absolute top-0 text-red-200 my-4 font-serif  text-4xl xl:text-6xl  flex items-center justify-center">
      Merry Christams {name ? name : "2025"}
    </div>
  );
}

export default Header;
