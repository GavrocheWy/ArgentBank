// Dependencies
import axios from 'axios'

export async function updateUserDatas(token, firstName, lastName) {

    const API_URL = process.env.REACT_APP_API_URL

    return new Promise(async (resolve, reject) => {

        try {
            const response = await axios.put(
                API_URL + '/profile',
                {
                    firstName: firstName, lastName: lastName
                },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            )
            resolve(response.data)
        } catch (error) {
            reject(error)
        }

    })

}