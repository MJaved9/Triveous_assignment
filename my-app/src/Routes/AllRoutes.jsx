import {Route,Routes} from 'react-router-dom'
import Home from '../Page/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import FavoriteNewsPage from '../Components/FavoriteNewsPage'
const AllRoutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path="favorites" element={<FavoriteNewsPage/>} />
    </Routes>
    </>
  )
}

export default AllRoutes