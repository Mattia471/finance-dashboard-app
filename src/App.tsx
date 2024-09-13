import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";

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
