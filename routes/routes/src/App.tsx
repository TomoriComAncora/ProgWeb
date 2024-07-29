import { BrowserRouter } from 'react-router-dom'
import RouteApp from './routes'
import Header from './components/Header'

function App() {

  return (
   <BrowserRouter>
   <Header/>
    <RouteApp/>
   </BrowserRouter>
  )
}

export default App
