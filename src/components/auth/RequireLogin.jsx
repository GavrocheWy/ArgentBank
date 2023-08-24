// Dependencies
import { Outlet, Navigate } from "react-router"
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../../features/loginStatus/loginStatus'

const RequireLogin = () => {

    const { isLogged } = useSelector((state) => state.loginStatus)

    return (
        isLogged ? <Outlet /> : <Navigate to="/" />
    )
}

export default RequireLogin