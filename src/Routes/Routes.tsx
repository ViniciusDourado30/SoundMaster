import { createBrowserRouter } from "react-router"
import App from "../App";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>,
            },            
            {
                path: "/teste",
                element: <h1>teste</h1>,
            }
        ]
    },
]);

export default Routes