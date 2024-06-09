import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import PublishCar from "../pages/Car/PublishCar";
import Driver from "../pages/Driver/Driver";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard title='Dashboard' />,
            },
            {
                path: "publish-car",
                element: <PublishCar title='Rental Car'/>,
            },
            {
                path: "driver",
                element: <Driver title='Driver'/>,
            },
        ]
    },
]);