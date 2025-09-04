import { Suspense, lazy } from "react";
import { useContext } from "react";

import { GameContext } from "./context/GameContextProvider";
import Loader from "./components/Loader";

const GameBoard = lazy(() => import("./components/GameBoard"));
const ButtonMenu = lazy(() => import("./components/ButtonMenu"));
const Result = lazy(() => import("./components/Result"));
const Sound = lazy(() => import("./components/Sound"));
const Header = lazy(() => import("./components/Header"));
const Login = lazy(() => import("./components/Login"));

function App() {
  const { start } = useContext(GameContext);
  return (
    <Suspense fallback={<Loader />}>
      <div className=" w-screen h-screen bg-app-banner bg-center bg-cover overflow-hidden">
        <main className="relative flex w-screen h-[95vh] justify-center items-center">
          <Header />
          <Sound />
          {!start ? (
            <Login />
          ) : (
            <>
              <div className="relative flex justify-center items-center w-[36rem] h-[36rem] md:w-[40rem] md:h-[40rem] bg-gameboard-background bg-center bg-contain bg-no-repeat">
                <GameBoard />
                <ButtonMenu />
              </div>
              <Result />
            </>
          )}{" "}
        </main>
        <footer className="text-center lg:text-xl md:text-sm font-semibold text-red-700">
          © 2025 Made❤by Bishoy
        </footer>
      </div>
    </Suspense>
  );
}

export default App;
