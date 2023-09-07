// Dependencies
import { useDispatch, useSelector } from 'react-redux'
import { setError, setFirstName, setLastName } from '../../features/profile/profile'

import { useEffect, useState } from 'react'
import React from 'react'
import { updateUserDatas } from '../../api/updateUserDatas'

const ProfileHeader = () => {

    const dispatch = useDispatch()
    const { firstName, lastName } = useSelector((state) => state.profile)
    const [displayedFirstName, setDisplayedFirstName] = useState("")
    const [displayedLastName, setDisplayedLastName] = useState("")
    const [isFormActive, setIsFormActive] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { token } = useSelector((state) => state.loginStatus)
    const { error } = useSelector((state) => state.profile)
    const localStorageToken = localStorage.getItem('token')

    useEffect(() => {
        firstName && setDisplayedFirstName(firstName)
    }, [firstName])

    useEffect(() => {
        lastName && setDisplayedLastName(lastName)
    }, [lastName])

    const handleSubmit = async (e) => {

        e && e.preventDefault()
        setIsLoading(true)

        try {

            const newUserDatas = await updateUserDatas(token ? token : localStorageToken, displayedFirstName, displayedLastName)
            dispatch(setFirstName(newUserDatas.body.firstName))
            dispatch(setLastName(newUserDatas.body.lastName))
            setIsLoading(false)
            setIsFormActive(false)
            dispatch(setError(''))

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
        <div className="header">
            {!isFormActive && <h1>Welcome back<br />{displayedFirstName + ' ' + displayedLastName} !</h1>}
            {isFormActive &&
                <React.Fragment>
                    <form className='infos-edition-form'>
                        <h1>Welcome back</h1>
                        {error && <p className='alert'>{error}</p>}
                        <input type="text" value={displayedFirstName} onChange={(e) => setDisplayedFirstName(e.target.value)} />
                        <input type="text" value={displayedLastName} onChange={(e) => setDisplayedLastName(e.target.value)} />
                        <div className='infos-edition-form--actions'>
                            <button onClick={() => setIsFormActive(false)}>Cancel</button>
                            <button onClick={(e) => handleSubmit(e)}>Save</button>
                        </div>
                    </form>
                    {isLoading && <div className='loading-wrapper'><div className="loading light"><div></div><div></div><div></div><div></div></div></div>}
                </React.Fragment>
            }
            {!isFormActive && <button className="edit-button" onClick={() => setIsFormActive(true)}>Edit Name</button>}
        </div>
    )
}

export default ProfileHeader