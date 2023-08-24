// Dependencies
import { NavLink } from 'react-router-dom'
// Components
import AuthControls from "../auth/AuthControls"
// Assets
import argentBankLogo from '../../assets/logos/argentBankLogo.png'

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <AuthControls />
            </nav>
        </header>
    )
}

export default Header