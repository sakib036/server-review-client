import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
import Review from "../Pages/MyReview/Review";
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
                element:<MyReview></MyReview>
            },
          
            {
                path:'/addservice',
                element:<AddService></AddService>
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/service/${params.id}`)
            },
            // {
            //     path:'/serviceDetails',
            //     element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
               
            // },
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