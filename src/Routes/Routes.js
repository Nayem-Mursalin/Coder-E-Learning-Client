import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category"
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: < Main ></ Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])