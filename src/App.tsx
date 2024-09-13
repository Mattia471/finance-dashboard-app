import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import {ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

function App() {
    return (
        <React.Fragment>
            <div className="app-container">
                <Navbar/>
                <div className="content-container">
                    <Outlet/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
