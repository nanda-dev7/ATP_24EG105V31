import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EditCounter1 from './components/EditCounter1'
import EditCounter2 from './components/EditCounter2'
import EditCounter3 from './components/EditCounter3'
import EditCounter4 from './components/EditCounter4'
import ContextProvider from './contexts/ContextProvider'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <p className="text-2xl justify-between"> EditCounter1</p>
        <ContextProvider
          children1={<><EditCounter1 /><EditCounter3 /></>}
          children2={<><EditCounter2 /><EditCounter4 /></>}
        />
        </div>
      ),
    },
  ])

  return <RouterProvider router={routerObj} />
}

export default App