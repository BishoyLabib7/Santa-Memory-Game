import GameBoard from "./components/GameBoard";
import ButtonMenu from "./components/ButtonMenu";
import Result from "./components/Result";
import Sound from "./components/Sound";
import Header from "./components/Header";
import Login from "./components/Login";
import { useContext } from "react";
import { GameContext } from "./context/GameContextProvider";

function App() {
  const { start } = useContext(GameContext);
  return (
    <main className="relative w-screen h-screen flex justify-center items-center bg-app-banner bg-center bg-cover overflow-hidden">
      <Header />
      <Sound />
      {!start ? (
        <Login />
      ) : (
        <>
          <div className="relative flex justify-center items-center w-[36rem] h-[36rem] md:w-[40rem] md:h-[40rem] bg-gameboard-background bg-center bg-contain bg-no-repeat">
            <GameBoard />
          </div>
          <ButtonMenu />
          <Result />
        </>
      )}
    </main>
  );
}

export default App;
