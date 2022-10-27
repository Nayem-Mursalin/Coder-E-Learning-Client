import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import CourseDetails from "../pages/CourseDetails/CourseDetails"
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CheckOut from "../pages/CheckOut/CheckOut";
import FAQ from "../pages/FAQ/FAQ";
import Blog from "../pages/Blog/Blog";

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
                path: '/courses',
                element: <Courses></Courses>,
                // loader: fetch(`https://code-e-learning-server-nayem-mursalin.vercel.app/allcourses`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://code-e-learning-server-nayem-mursalin.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://code-e-learning-server-nayem-mursalin.vercel.app/course/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])