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
        <div className={`p-4 rounded-lg shadow-md ${colorClass}`}>
            {/* Balance and chip section */}
            <div className="flex justify-between mb-4">
                <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-2xl font-semibold">{valueToShow}</p>
                </div>
                <div className="flex items-center">
                    {/* Simulate a chip */}
                    <Euro className={`w-6 h-6 ${color === "white" ? "text-gray-800" : "text-white"}`} />
                </div>
            </div>

            {/* Uncomment this section if needed */}
            {/*<div className="flex justify-between mb-4">
                <div>
                    <p className="text-sm font-light">CARD HOLDER</p>
                    <p className="font-medium">Eddy Cusuma</p>
                </div>
                <div>
                    <p className="text-sm font-light">VALID THRU</p>
                    <p className="font-medium">12/22</p>
                </div>
            </div>*/}

            {/* Uncomment this section if needed */}
            {/*<div className="flex justify-between items-center">
                <p className="font-semibold tracking-wider">3778 **** **** 1234</p>
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white" />
                </div>
            </div>*/}
        </div>
    );
};

export default Widget;
