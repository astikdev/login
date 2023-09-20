import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';


const PrivateRoutes = () => {
  const token = useAppSelector(state=>state.auth.token)
  return (
    token ? <Outlet/> : <Navigate to='/login'/>  
  )
}

export default PrivateRoutes