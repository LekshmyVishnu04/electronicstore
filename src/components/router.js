
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Listelectronics from "./electronics/Listelectronics";
import Createelectronics from "./Createelectronics";
import EditProduct from "./electronics/EditProduct";
import Viewproduct from "./electronics/Viewproduct";

const router = createBrowserRouter([
    { path: '', element: <App></App> },
    { path: 'electronics/list', element: <Listelectronics /> },
    { path: 'electronics/create', element: <Createelectronics /> },
    { path: '/electronics/:product/edit', element: <EditProduct /> },
    { path: '/electronics/:product/view', element: <Viewproduct /> }
])




export default router;