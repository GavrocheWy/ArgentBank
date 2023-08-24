// Dependencies
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { logOut } from '../../features/loginStatus/loginStatus'

const AuthControls = () => {

    const { isLogged } = useSelector((state) => state.loginStatus)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        dispatch(logOut())
        navigate('/')
    }

    return (
        <div>
            {isLogged ?
                <button onClick={() => logout()} className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign Out
                </button>
                :
                <NavLink className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            }
        </div>
    )
}

export default AuthControls