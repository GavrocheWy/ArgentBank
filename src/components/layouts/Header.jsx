// Assets
import argentBankLogo from '../../assets/logos/argentBankLogo.png'

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </nav>
        </header>
    )
}

export default Header