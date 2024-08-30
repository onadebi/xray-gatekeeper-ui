import { createBrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import GeneralLayout from "../app/xraygatekeeper/components/layouts/GeneralLayout";
import Home from "../app/xraygatekeeper/pages/Home";

const AppRouter = createBrowserRouter([
    {
        path: AppRoutes().home.home,
        element: <GeneralLayout/>,
        children: [
            {
                path: AppRoutes().home.home,
                element: <Home/>
            }
        ]
    }

]);

export default AppRouter;