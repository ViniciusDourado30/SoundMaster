import { createBrowserRouter } from "react-router"
import App from "../App";
import Dashboard from "../Pages/Dashboard";
import PlaylistPage from "../Pages/PlaylistPage";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>,
            },            
            {
                path: "/playlist",
                element: <PlaylistPage/>,
            }
        ]
    },
]);

export default Routes