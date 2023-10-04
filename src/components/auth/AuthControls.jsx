// Dependencies
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import React from 'react'
import { logOut } from '../../features/loginStatus/loginStatus'
import { clearProfile } from '../../features/profile/profile'

const AuthControls = () => {

    const { isLogged } = useSelector((state) => state.loginStatus)
    const { firstName } = useSelector((state) => state.profile)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        dispatch(clearProfile())
        dispatch(logOut())
        navigate('/')
    }

    return (
        <div className='auth-controls'>
            {isLogged ?
                <React.Fragment>
                    <NavLink className="main-nav-item" to="/profile">
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </NavLink>
                    <button onClick={() => logout()} className="main-nav-item">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        Sign Out
                    </button>
                </React.Fragment>
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