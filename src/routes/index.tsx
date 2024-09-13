import {createBrowserRouter} from 'react-router-dom';
import App from "../App.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import NotFound from "../pages/NotFound.tsx";

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
                element: <NotFound/>,
            },
        ],
    },
]);

export default router;