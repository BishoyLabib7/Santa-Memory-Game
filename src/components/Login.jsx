import { useContext, useState } from "react";
import { GameContext } from "../context/GameContextProvider";

const inputStyle =
  "rounded-full border border-red-200 px-5 py-3 text-xl transition-all duration-300 focus:outline-none focus:ring focus:ring-red-300  md:px-6 md:py-3 w-[20rem] h-[5rem] lg:w-[30rem] lg:h-[5rem]";

function Login() {
  const { setUserName, setState } = useContext(GameContext);
  const [name, setName] = useState();

  function handleChange(e) {
    setUserName(e.target.value);
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserName(name);
    setState((b) => !b);
  }
  return (
    <div className="px-4 py-6 z-40 rounded-xl inset-0 lg:w-[50rem] lg:h-[10rem] w-[20rem] h-[20rem] flex justify-center items-center">
      <form className="mb-5 flex gap-5 lg:flex-row justify-center items-center flex-col">
        {/* <label className="text-stone-600 text-5xl font-mono">Name:</label> */}
        <input
          className={inputStyle}
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Your Name"
        />
        <span>
          <button
            className="text-stone-300 inline-block rounded-full px-4 py-3 md:px-5 md:py-4 bg-red-600 font-semibold uppercase tracking-wide  transition-all duration-500 hover:bg-red-300 hover:text-stone-700 hover:w-[8rem] focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed w-[7rem] h-[5rem] text-2xl font-mono"
            onClick={handleSubmit}
          >
            Start
          </button>
        </span>
      </form>
    </div>
  );
}

export default Login;
