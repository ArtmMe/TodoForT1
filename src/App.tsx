import '@mantine/core/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { TaskList } from './components/TaskList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TaskList />,
      },
      {
        path: '/task/:id',
        element: <TaskList />,
      },
    ],
  },
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
