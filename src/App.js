import './App.css';
import React from 'react';
import AddTask from './components/AddTask';
import RootLayout from './components/RootLayout';
import TaskList from './components/TaskList';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:'/',
          element:<AddTask/>
        },
        {
          path:'/tasklist',
          element:<TaskList />
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;