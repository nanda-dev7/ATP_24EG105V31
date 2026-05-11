import {createBrowserRouter, RouterProvider,Navigate} from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Technologies from "./components/Technologies.jsx";
import Java from "./components/Java.jsx";
import Nodejs from "./components/Nodejs.jsx";
import Vue from "./components/Vue.jsx";
function App() {
//adding routing config
const RouterObj=createBrowserRouter([
    {
        path:"/",
        element:<RootLayout />,
        children:[
            {
                path:"",
                element:<Home />
            },
            {
                path:"register",
                element:<Register />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"tech",
                element:<Technologies />,
                children:[
                  {
                    index:true,
                    element:<Navigate to="java" replace/>
                  },
                    {
                    path:"java",
                    element:<Java />
                },
                {
                    path:"nodejs",
                    element:<Nodejs />
                },
                {
                    path:"vue",
                    element:<Vue />
                }
            ]
            }
        ]
    }
])
  return (
    <RouterProvider router={RouterObj}/>
  )
}

export default App