import React from "react"

export default function Card(props) {
    console.log("Cards")
    console.log(props)
    return (
        <div className="flex flex-col w-[30rem]">
            <div className="flex items-center ml-10 py-5 gap-5 shadow-[0px_5px_5px_#F5F5F5]">
                <div className="w-[125px] h-[168px]">
                    <img className="w-[100%] h-[100%] object-cover rounded-md" src={props.item.imageUrl} alt="" />
                </div>
                <div className="flex flex-col font-[inter]">
                    <div className="flex items-center">
                        <i className="fa-solid fa-location-dot text-[#F55A5A]"></i>
                        <p className="ml-2 text-xs tracking-widest">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} className="underline ml-5 text-[#918E9B] text-[0.64rem]">View on Google Maps</a>
                    </div>
                    <h2 className="font-[700] text-2xl py-1">{props.item.title}</h2>
                    <p className="pt-3 pb-2 text-[0.64rem] font-bold">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="pb-2 text-[0.64rem] w-80 text-[#2B283A]">
                        {props.item.description}
                    </p>

                </div>
            </div>
        </div>
    )
}