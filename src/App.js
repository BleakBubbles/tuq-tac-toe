import Board from "./components/Board.js";
import Title from "./components/Title.js";

import github from "./assets/github.png"

function App() {
  return (
    <div className="w-[100dvw] h-[100dvh] grid grid-rows-12 place-items-center">
      <Title />
      <Board />
      <div className="row-span-1 flex flex-row items-center justify-items-end text-[3dvh]">
        Made by Max Hua for Tuq {" "}
        |
        <a href="https://github.com/BleakBubbles/tuq-tac-toe" className="cursor-pointer p-[1dvh]" target="_blank" rel="noopener noreferrer">
          <img className="size-[4dvh]" src={github} alt="Github Repository" />
        </a>
      </div>
    </div>
  );
}

export default App;
