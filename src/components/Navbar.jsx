import React from "react"

export default function Navbar() {
    return (
        <nav className=" bg-[#F55A5A] w-[550px]">
            <div className="h-[55px] flex justify-center items-center gap-2">
                <img src="/images/fill.png" alt="" />
                <p className="text-white text-sm font-[inter] font-[500]">my travel journal.</p>
            </div>
        </nav>
    )
}