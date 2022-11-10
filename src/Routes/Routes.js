import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EditComment from "../Pages/MyReview/EditComment";
import MyReview from "../Pages/MyReview/MyReview";

import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




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
                path:'/myreview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
            },
          
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('https://perfect-engineering-server.vercel.app/services')
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://perfect-engineering-server.vercel.app/service/${params.id}`)
            },
            
            {
                path:'/blog',
                element:<Blog></Blog>
        
            },
            {
                path:'/comments/newComment/:id',
                element:<EditComment></EditComment>,
                loader:({params})=>fetch(`https://perfect-engineering-server.vercel.app/comments/newComment/${params.id}`)
        
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