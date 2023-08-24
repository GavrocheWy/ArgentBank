// Dependencies
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setError, setFirstName, setLastName, removeProfile } from '../../features/profile/profile'
import { useEffect, useState } from 'react'
import { updateUserDatas } from '../../api/updateUserDatas'

const ProfileHeader = () => {

    const dispatch = useDispatch()
    const { firstName, lastName } = useSelector((state) => state.profile)
    const [displayedFirstName, setDisplayedFirstName] = useState("")
    const [displayedLastName, setDisplayedLastName] = useState("")
    const [isFormActive, setIsFormActive] = useState(false)
    const { token } = useSelector((state) => state.loginStatus)
    const localStorageToken = localStorage.getItem('token')

    useEffect(() => {
        firstName && setDisplayedFirstName(firstName)
    }, [firstName])

    useEffect(() => {
        lastName && setDisplayedLastName(lastName)
    }, [lastName])

    const handleSubmit = async (e) => {
        e && e.preventDefault()
        try {
            const newUserDatas = await updateUserDatas(token ? token : localStorageToken, displayedFirstName, displayedLastName)
            setIsFormActive(false)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="header">
            {!isFormActive && <h1>Welcome back<br />{displayedFirstName + ' ' + displayedLastName} !</h1>}
            {isFormActive &&
                <form>
                    <h1>Welcome back</h1>
                    <input type="text" value={displayedFirstName} onChange={(e) => setDisplayedFirstName(e.target.value)} />
                    <input type="text" value={displayedLastName} onChange={(e) => setDisplayedLastName(e.target.value)} />
                    <button onClick={(e) => handleSubmit(e)}>Save</button>
                    <button onClick={() => setIsFormActive(false)}>Cancel</button>
                </form>
            }
            {!isFormActive && <button className="edit-button" onClick={() => setIsFormActive(true)}>Edit Name</button>}
        </div>
    )
}

export default ProfileHeader