import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="bg-white shadow-md top-0 z-50">
            <div className="flex items-center justify-between p-4">
                <h1 className="text-gray-800 text-2xl font-bold">
                    Finances App
                </h1>
                <div className="flex items-center space-x-2">
                    {/* Placeholder for future icons */}
                    {/* <button className="text-gray-700">
                        <HomeIcon />
                    </button>
                    <button className="text-gray-700">
                        <InfoIcon />
                    </button>
                    <button className="text-gray-700">
                        <ContactMailIcon />
                    </button> */}
                    <img
                        alt="User Avatar"
                        src="https://mui.com/static/images/avatar/2.jpg"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
