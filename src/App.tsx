import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import MetaTag from './app/xraygatekeeper/components/MetaTag'

function App() {

  return (
    <>
      <HelmetProvider>
        <MetaTag title=''/>
        <RouterProvider router={AppRouter} />
      </HelmetProvider>
    </>
  )
}

export default App
