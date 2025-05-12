import { createBrowserRouter } from "react-router"
import App from "../App";
import Dashboard from "../Pages/Dashboard";

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
                path: "/teste",
                element: <h1>teste</h1>,
            }
        ]
    },
]);

export default Routes