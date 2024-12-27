import { useContext, useState } from "react";
import { GameContext } from "../context/GameContextProvider";

const inputStyle =
  "rounded-full border border-stone-200 px-5 py-3 text-xl transition-all duration-300 focus:outline-none focus:ring focus:ring-red-300 w-full md:px-6 md:py-3 w-[15rem] h-[5rem]  lg:w-[30rem] lg:h-[5rem]";

function Login() {
  const { setUserName, setState } = useContext(GameContext);
  const [name, setName] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    setUserName(name);
    setState((b) => !b);
  }
  return (
    <div className="px-4 py-6 bg-red-200 z-40 rounded-xl inset-0 lg:w-[50rem] lg:h-[10rem] w-[20rem] h-[20rem] flex justify-center items-center">
      <form className="mb-5 flex gap-5 lg:flex-row justify-center items-center flex-col">
        <label className="text-stone-600 text-5xl font-mono">Name:</label>
        <input
          className={inputStyle}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <span>
          <button
            className="text-stone-300 inline-block rounded-full px-4 py-3 md:px-6 md:py-4 bg-red-600 font-semibold uppercase tracking-wide  transition-colors duration-300 hover:bg-red-300 hover:text-stone-700 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed w-[5rem] h-[5rem] text-2xl "
            onClick={handleSubmit}
          >
            GO
          </button>
        </span>
      </form>
    </div>
  );
}

export default Login;
