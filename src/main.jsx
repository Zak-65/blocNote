import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ConfirmationDelete from './components/layout/confirmationDelete.jsx'
const router= createBrowserRouter([
  {path:"/",
    element:<App/>

  }
  ,{
    path:"/edit",
    element:<App/>
  }
  ,{
    path:"/add",
    element:<App/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfirmationDelete/>
    <RouterProvider router={router}/>
  </StrictMode>
)
