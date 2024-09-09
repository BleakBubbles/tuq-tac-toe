import React from "react";

export default function Tile({ tile, handleClick }) {
    if (tile.player) {
        return (
            <div className="row-span-1 col-span-1 w-full h-full grid place-items-center border-2 border-slate-200 text-[16vh]">
                <div>
                    {tile.player === 1 ? "X" : "O"}
                </div>
            </div>
        );
    } else {
        return (
            <div className="row-span-1 col-span-1 w-full h-full border-2 border-slate-200 cursor-pointer hover:bg-slate-300"
                onClick={handleClick}>
            </div>
        );
    }
}