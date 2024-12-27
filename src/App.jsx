import GameBoard from "./components/GameBoard";
import ButtonMenu from "./components/ButtonMenu";
import Result from "./components/Result";
import GameContextProvider from "./context/GameContextProvider";
import Sound from "./components/Sound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useContext } from "react";
import { GameContext } from "./context/GameContextProvider";

function App() {
  const { start } = useContext(GameContext);
  return (
    <main className="relative w-screen h-screen flex items-center justify-center bg-center bg-cover bg-app-banner overflow-hidden">
      <Header />
      <Sound />
      {!start ? (
        <Login />
      ) : (
        <>
          <div className="flex justify-center items-center bg-gameboard-background w-[36rem] h-[36rem] md:w-[40rem] md:h-[40rem] bg-center bg-contain bg-no-repeat">
            <GameBoard />
          </div>
          <ButtonMenu />
          <Result />
        </>
      )}
      <Footer />
    </main>
  );
}

export default App;
