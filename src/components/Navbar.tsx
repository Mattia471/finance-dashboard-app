import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Avatar} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar: React.FC = () => {
    return (
        <AppBar position="sticky" elevation={1}>
            <Toolbar className="justify-between">
                <Typography variant="h6" className="flex-grow">
                    Finances App
                </Typography>
                <div className="flex space-x-2">
                    <IconButton color="inherit">
                        <HomeIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <InfoIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <ContactMailIcon />
                    </IconButton>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;