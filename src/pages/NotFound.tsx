import React from 'react';
import {Box, Button, Typography} from '@mui/material';

const NotFound: React.FC = () => {

    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <Box className="flex flex-col items-center justify-center h-screen p-4 text-center bg-gray-100">
            <Typography variant="h1" component="h1" className="text-6xl font-bold text-gray-800">
                404
            </Typography>
            <Typography variant="h4" component="h2" className="mt-4 mb-6 text-xl text-gray-600">
                Oops! The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoHome}>
                Go to Homepage
            </Button>
        </Box>
    );
};

export default NotFound;
