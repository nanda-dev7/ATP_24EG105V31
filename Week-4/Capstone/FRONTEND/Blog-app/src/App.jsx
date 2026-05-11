import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/Rooter'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import AuthorProfile from './components/AuthorProfile'
import AdminProfile from './components/AdminProfile'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "user-profile",
          element: <UserProfile />
        },
        {
          path: "author-profile",
          element: <AuthorProfile />
        },
        {
          path: "admin-profile",
          element: <AdminProfile />
        }
      ]
    }
  ])

  return <RouterProvider router={routerObj} />
}

export default App