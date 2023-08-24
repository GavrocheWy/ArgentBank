// Dependencies
import axios from 'axios'

export async function getUserToken(logInfos) {

  const API_URL = process.env.REACT_APP_API_URL

  return new Promise(async (resolve, reject) => {

    try {
      const response = await axios.post(API_URL + '/login', logInfos)
      resolve(response.data)
    } catch (error) {
      reject(error)
    }

  })

}