import React from 'react';
import { Box, CssBaseline } from '@mui/material';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" height="100vh">
            <CssBaseline />
            <div className="flex flex-col flex-grow p-4 bg-gray-100">
                {/* Prima riga */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 p-4 md:w-1/3">
                        {/* Colonna 1 */}
                        {children && children[0]}
                    </div>
                    <div className="flex-1 p-4 md:w-1/3">
                        {/* Colonna 2 */}
                        {children && children[1]}
                    </div>
                    <div className="flex-1 p-4 md:w-1/3">
                        {/* Colonna 3 */}
                        {children && children[2]}
                    </div>
                </div>

                {/* Seconda riga */}
                <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
                    <div className="flex-1 p-4 md:w-2/3">
                        {children && children[3]}
                    </div>
                    <div className="flex-1 p-4 md:w-1/3">
                        {children && children[4]}
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Layout;