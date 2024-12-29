import { useContext } from "react";
import { GameContext } from "../context/GameContextProvider";

function Header() {
  const { name } = useContext(GameContext);
  const data = new Date();
  return (
    <div className="absolute top-0 text-red-200 my-4 font-Christmas flex tems-center justify-center">
      <h1 className="font-bold text-center text-3xl xl:text-7xl   ">
        {" "}
        Merry Christams{" "}
        {name
          ? name
          : data.getMonth() === 11
          ? data.getFullYear() + 1
          : data.getFullYear()}
      </h1>
    </div>
  );
}

export default Header;
