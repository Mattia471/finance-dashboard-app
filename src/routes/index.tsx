import {createBrowserRouter, Navigate} from 'react-router-dom';
import App from "../App.tsx";
import Dashboard from "../pages/Dashboard.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>,
            },
            {
                path: '*',
                element: <Navigate to={'/'} replace/>
            },
        ],
    },
]);

export default router;