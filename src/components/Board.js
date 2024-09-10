import { React, useState, useEffect } from "react";

import Tile from "./Tile.js";

export default function Board() {
    const [player1, setPlayer1] = useState(true);
    const [winner, setWinner] = useState(0);
    const board0 = [
        { player: 0, id: "1,1", won:false },
        { player: 0, id: "1,2", won:false },
        { player: 0, id: "1,3", won:false },
        { player: 0, id: "2,1", won:false },
        { player: 0, id: "2,2", won:false },
        { player: 0, id: "2,3", won:false },
        { player: 0, id: "3,1", won:false },
        { player: 0, id: "3,2", won:false },
        { player: 0, id: "3,3", won:false }
    ];
    const [board, setBoard] = useState(board0)

    useEffect(() => {
        if (!winner) {
            //check rows
            for(let i = 0; i < 3; i++) {
                if (board[i * 3].player && board[i * 3].player === board[i * 3 + 1].player && board[i * 3 + 1].player === board[i * 3 + 2].player) {
                    setWinner(board[i*3].player);
                    const newBoard = board.slice();
                    newBoard[i * 3].won = true;
                    newBoard[i * 3 + 1].won = true;
                    newBoard[i * 3 + 2].won = true;
                    setBoard(newBoard);
                }
            }
            //check columns
            for (let i = 0; i < 3; i++) {
                if (board[i].player && board[i].player === board[i + 3].player && board[i+3].player === board[i + 6].player) {
                    setWinner(board[i].player);
                    const newBoard = board.slice();
                    newBoard[i].won = true;
                    newBoard[i + 3].won = true;
                    newBoard[i + 6].won = true;
                    setBoard(newBoard);
                }
            }
            //check diagonals
            if (board[0].player && board[0].player === board[4].player && board[4].player === board[8].player) {
                setWinner(board[0].player);
                const newboard = board.slice();
                newboard[0].won = true;
                newboard[4].won = true;
                newboard[8].won = true;
                setBoard(newboard);
            } else if (board[2].player && board[2].player === board[4].player && board[4].player === board[6].player) {
                setWinner(board[2].player);
                const newBoard = board.slice();
                newBoard[2].won = true;
                newBoard[4].won = true;
                newBoard[6].won = true;
                setBoard(newBoard)
            }
            //check tie
            if (!winner && board.every(tile => tile.player)) {
                setWinner(-1);
            }
        }
    }, [board, winner])

    const handleClick = (tile) => {
        setBoard(
            board.map((space) => {
                if (space.id === tile.id) {
                    return { ...space, player: player1 ? 1 : 2 };
                } else {
                    return space;
                }
            })
        );
        console.log(player1);
        setPlayer1(!player1);
    }
    return (
        <>
            {winner ? <div className="absolute grid grid-rows-1 place-items-center z-10 w-full h-full backdrop-blur-[1vh]">
                <div className="bg-slate-100 drop-shadow-[2vh] w-[36vh] h-[24vh] grid grid-rows-2 place-items-center text-[5vh] rounded-[2vh]">
                    {winner > 0 ? 
                    (winner === 1 ? "X wins!" : "O wins!") : "It's a tie!"}
                    <div className="p-[1vh] bg-slate-200 cursor-pointer hover:bg-slate-300 text-[3vh] rounded-[1vh]"
                    onClick={() => {
                        setWinner(0);
                        setPlayer1(true)
                        setBoard(board0);
                    }}>
                        Play again
                    </div>
                </div>
                </div> : null}
            <div className="text-[3vh]">
                Player: {player1 ? "X" : "O"}
            </div>
            <div className="size-[72vh] row-span-9 grid grid-rows-3 grid-cols-3 place-items-center border-[1vh] border-slate-200">
                {board.map((space) => {
                    return <Tile key={space.id} player={space.player} won={space.won} handleClick={() => handleClick(space)} />;
                })}
            </div>
        </>
        
    );
}
