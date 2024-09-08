import React from "react";

import tuq from "../assets/tuq.png"

export default function Title() {
    return (
        <div className="row-span-2 p-4 flex flex-row place-items-center text-[10vh]">
            <img src={tuq} alt="Tuq" className="size-[12vh]"/>
            uq-tac-toe
        </div>
    )
}
