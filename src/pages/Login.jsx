// Dependencies
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { getUserToken } from '../api/getUserToken'
import { setError, logIn, setToken } from '../features/loginStatus/loginStatus'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const { error } = useSelector((state) => state.loginStatus)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Connect
    const handleSubmit = async (e) => {

        e && e.preventDefault()
        setIsLoading(true)

        try {
            const user = await getUserToken({ email, password })

            if (!user?.body?.token) {
                console.log("La donnée n'a pas pu être récupérée")
                return;
            }

            const token = user.body.token

            rememberMe ? localStorage.setItem('token', token) : localStorage.removeItem('token')

            dispatch(setToken(token))
            setIsLoading(false)
            dispatch(setError(''))
            dispatch(logIn())
            navigate('/profile')

        } catch (error) {

            setIsLoading(false)
            if (error?.response?.data?.message) {
                dispatch(setError(error.response.data.message))
            } else {
                dispatch(setError("Error: Server do not respond. Please retry later"))
            }

        }
    }

    return (
        <main className='main bg-dark'>
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {error && <p className='alert'>{error}</p>}
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
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
                {isLoading && <div className='loading-wrapper'><div className="loading"><div></div><div></div><div></div><div></div></div></div>}
            </section>
        </main>
    )
}

export default Login