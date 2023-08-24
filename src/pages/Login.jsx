// Dependencies
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { authentify } from '../api/authentify'
import { setLoading, setError, logIn, logOut } from '../features/loginStatus/loginStatus'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isLoading, error } = useSelector((state) => state.loginStatus)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e && e.preventDefault()
        try {
            const user = await authentify({ email, password })
            dispatch(logIn())
            navigate('/profile')
        } catch (err) {
            console.log(err)
            dispatch(setError(err.response.data.message))
        }
    }

    return (
        <main>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            id="username"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Login