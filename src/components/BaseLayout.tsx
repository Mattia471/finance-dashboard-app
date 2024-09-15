import {Box, SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material';
import {Add, Print} from "@mui/icons-material";

const actions = [
    {icon: <Add/>, name: 'Crea'},
    {icon: <Print/>, name: 'Stampa'},
];
const Layout = ({children}) => {
    return (
        <Box display="flex" flexDirection="column" height="100vh">
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
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-2 p-4 md:w-2/4">
                        {children && children[3]}
                    </div>
                    <div className="flex-1 p-4">
                        {children && children[4]}
                    </div>
                    <div className="flex-1 p-4">
                        {children && children[5]}
                    </div>
                </div>
                <div style={{position: 'fixed', bottom: 16, right: 16}}>
                    <SpeedDial
                        ariaLabel="SpeedDial example"
                        icon={<SpeedDialIcon/>}
                        direction="left" // Il menu si apre verso sinistra
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={() => alert(`${action.name} action`)} // Azione esempio
                            />
                        ))}
                    </SpeedDial>
                </div>
            </div>
        </Box>
    );
};

export default Layout;