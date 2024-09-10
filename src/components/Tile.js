import React from "react";

export default function Tile({ player, won, handleClick }) {
    if (player) {
        return (
            <div
                className={
                    won
                        ? "row-span-1 col-span-1 w-full h-full grid place-items-center border-[1vh] border-slate-200 text-[12vh] bg-green-500"
                        : "row-span-1 col-span-1 w-full h-full grid place-items-center border-[1vh] border-slate-200 text-[12vh]"
                }
            >
                <div>{player === 1 ? "X" : "O"}</div>
            </div>
        );
    } else {
        return (
            <div
                className="row-span-1 col-span-1 w-full h-full border-[1vh] border-slate-200 cursor-pointer hover:bg-slate-300"
                onClick={handleClick}
            ></div>
        );
    }
}
