import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import 'font-awesome/css/font-awesome.min.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import LoginContextProvider from './Components/LoginContext/LoginContext';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> }
      ]
    }
  ])

  return (
    <>
      <LoginContextProvider>
        <RouterProvider router={routes}></RouterProvider>
      </LoginContextProvider>
    </>
  )
}

export default App
