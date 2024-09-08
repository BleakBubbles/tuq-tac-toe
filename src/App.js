import Board from "./components/Board.js";
import Title from "./components/Title.js";

function App() {
  return (
    <div className="w-screen h-screen grid grid-rows-12 place-items-center">
      <Title />
      <Board />
      <div></div>
    </div>
  );
}

export default App;
