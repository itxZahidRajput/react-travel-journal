import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "../src/data"

export default function App() {
    const cardData = Data.map(item => {
        return (
            <Card
                key={item.title}
                item={item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <div>
                {cardData}
            </div>
        </div>
    )
}