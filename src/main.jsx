import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import FeaturesComing from './components/FeafturesComing.jsx'
import NotFound from './components/NotFound.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/projects",
          element: <ProjectsPage />
        },
        {
          path: "/blogs",
          element: <FeaturesComing />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
