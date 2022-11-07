import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";



export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
        
            },
            {
                path:'/home',
                element:<Home></Home>
        
            },
            {
                path:'/services',
                element:<Services></Services>
        
            },
            {
                path:'/blog',
                element:<Blog></Blog>
        
            },
            {
                path:'/login',
                element:<Login></Login>      
            },
            {
                path:'/register',
                element:<Register></Register>      
            },
        ]
    }
])