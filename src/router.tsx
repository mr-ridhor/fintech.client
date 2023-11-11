import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Layout/Home/HomeLayout";
import HomePage from "./Pages/Home/HomePage";
import AuthLayout from "./Layout/Auth/AuthLayout";
import RegisterPage from "./Pages/Auth/Register/RegisterPage";
import LoginPage from "./Pages/Auth/Login/LoginPage";


const router=createBrowserRouter([
    //home route

    {
        path:'/',
        element:<HomeLayout/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            }
        ]
    },


   // auth routes

   {
    path:'/auth',
    element:<AuthLayout/>,
    children:[
        {
            path:"/auth/register",
            element:<RegisterPage/>
        },
        {
            path:"/auth/login",
            element:<LoginPage/>
        }
    ]
   }
])



export default router