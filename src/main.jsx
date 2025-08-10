import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import AddPost from './dashboard/pages/AddPost.jsx'
import EditPost from './dashboard/pages/EditPost.jsx'

import AuthLayout from './components/Layout/AuthLayout.jsx'
import ViewPost from './Pages/ViewPost.jsx'
import AllPosts from './Pages/AllPosts.jsx'
import Category from './Pages/Category.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import AllPostDashboard from './dashboard/pages/AllPostDashboard.jsx'
import HomeDashboard from './dashboard/pages/HomeDashboard.jsx'
import AddPhoto from './dashboard/pages/AddPhoto.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
        {
        path: "/login",
        element: 
        (
        <AuthLayout authentication={false}>
<Login />
        </AuthLayout>
        
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      }
      
      ,
      {
         path:'/post/:slug',
         element:(
          <AuthLayout authentication>
            <ViewPost></ViewPost>
          </AuthLayout>
         )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: '/posts',
        element: <AllPosts/>
      }
      ,
      {
        
        path: '/posts/:category',
        element: <Category/>
    
      }
      
    ]
      
  }
  ,
   {
        path:'/dashboard',
         element:(
            <AuthLayout authentication>
            <Dashboard/>
            </AuthLayout>
           ),
        children:[
         
          {
           path: '/dashboard/',
           element:(
            <AuthLayout authentication>
            <HomeDashboard/>
            </AuthLayout>
           )
          },
           {
            path: '/dashboard/all-posts',
            element:(
               <AuthLayout authentication>
                <AllPostDashboard/>
               </AuthLayout>
            )
          }
          ,
      {
        path: "/dashboard/add-Post",
        element: (
          <AuthLayout authentication>
            <AddPost/>
          </AuthLayout>
        )
      }
          ,

           {
        path: "/dashboard/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: "/dashboard/add-photo",
        element: (
          <AuthLayout authentication>
            <AddPhoto/>
          </AuthLayout>
        )
      },
        
      {
        
           
        path: "/dashboard/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        )
      
      }
        ]
  }
])

// ✅ Use RouterProvider with the router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
