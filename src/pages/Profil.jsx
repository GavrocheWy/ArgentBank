// Dependencies
import { useDispatch, useSelector } from 'react-redux'
import { getUserDatas } from '../api/getUserDatas'
import { setFirstName, setLastName } from '../features/profile/profile'
// Components 
import ProfileHeader from '../components/profile/ProfileHeader'

const Profil = () => {

    const { token } = useSelector((state) => state.loginStatus)
    const localStorageToken = localStorage.getItem('token')
    const dispatch = useDispatch()

    // Get User Infos
    getUserDatas(token ? token : localStorageToken)
        .then((data) => {
            dispatch(setFirstName(data.body.firstName))
            dispatch(setLastName(data.body.lastName))
        })
        .catch((error) => console.log(error.response.data.message))

    return (
        <main className="main bg-dark">
            <ProfileHeader />
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default Profil