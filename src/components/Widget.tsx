import {Euro} from "@mui/icons-material";
import {useEffect, useState} from "react"; // Puoi usare un'icona SVG se non vuoi usare Material UI

const Widget = ({title, valueToShow, color}) => {
    const [colorClass, setColorClass] = useState("bg-gradient-to-br from-blue-500 to-indigo-600 text-white");

    useEffect(() => {
        switch (color) {
            case "red":
                setColorClass("bg-gradient-to-br from-red-500 to-pink-600 text-white");
                break;
            case "green":
                setColorClass("bg-gradient-to-br from-green-500 to-emerald-600 text-white");
                break;
            case "yellow":
                setColorClass("bg-gradient-to-br from-yellow-500 to-amber-600 text-white");
                break;
            case "white":
                setColorClass("bg-white text-gray-800 text-dark");
                break;
        }
    }, [color]);
    return (
        <div
            className={`p-4 rounded-lg shadow-md ${colorClass} transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-50 cursor-pointer`}>
            {/* Balance and chip section */}
            <div className="flex justify-between mb-4">
                <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-2xl font-semibold">{valueToShow}</p>
                </div>
                <div className="flex items-center">
                    <Euro className={`w-6 h-6 ${color === "white" ? "text-gray-800" : "text-white"}`}/>
                </div>
            </div>
        </div>
    );
};

export default Widget;
