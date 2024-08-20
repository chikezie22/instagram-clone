// import { Button } from "@chakra-ui/react"
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './Layouts/PageLayout/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
function App() {
  

  return (
    <>
    {/* pagelayout takes the routes from react router as children prop which it displays to the user according to the route */}
    <PageLayout>
    <Routes>
      <Route path='/' element = {<HomePage/>}/>
      <Route path='/auth' element = {<AuthPage/>}/>
      <Route path='/:username' element = {<ProfilePage/>}/>
     </Routes>
    </PageLayout>
    
      
    </>
  )
}

export default App
