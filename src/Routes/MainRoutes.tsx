import {Routes, Navigate, Route} from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Home from '../component/Home'
import Products from '../component/Products'
import LoginForm from '../component/LoginForm'

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Navigate to='/products' />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products />} />
      </Route>
      <Route path='/login' element={<LoginForm />} />
    </Routes>
  )
}

export default MainRoutes