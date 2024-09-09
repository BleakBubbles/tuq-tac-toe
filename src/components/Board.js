import { React, useState, useEffect } from "react";

import Tile from "./Tile.js";

export default function Board() {
    const [player1, setPlayer1] = useState(true);

    const [board, setBoard] = useState([
        { row: 1, col: 1, player: 0, id: "1,1" },
        { row: 1, col: 2, player: 0, id: "1,2" },
        { row: 1, col: 3, player: 0, id: "1,3" },
        { row: 2, col: 1, player: 0, id: "2,1" },
        { row: 2, col: 2, player: 0, id: "2,2" },
        { row: 2, col: 3, player: 0, id: "2,3" },
        { row: 3, col: 1, player: 0, id: "3,1" },
        { row: 3, col: 2, player: 0, id: "3,2" },
        { row: 3, col: 3, player: 0, id: "3,3" },
    ]);

    // useEffect(() => {
    //     //check rows
    //     for(let i = 0; i < 3; i++) {
    //         if (board[i * 3].player === board[i * 3 + 1].player && board[i])
    //     }
    // })

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
        setPlayer1(!player1)
    }
    return (
        <div className="size-[72vh] row-span-9 grid grid-rows-3 grid-cols-3 place-items-center border-2 border-slate-200">
                {board.map((space) => {
                    return <Tile key={space.id} tile={space} handleClick={() => handleClick(space)} />;
                })}
        </div>
    );
}
