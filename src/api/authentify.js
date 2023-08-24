// Dependencies
import axios from 'axios'

export async function authentify(userInfos) {

  const API_URL = process.env.REACT_APP_API_URL

  return new Promise(async (resolve, reject) => {

    try {
      const res = await axios.post(API_URL + '/login', userInfos)
      const token = res.data.body.token
      if (token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      else delete axios.defaults.headers.common['Authorization']
      resolve(res.data)
    } catch (error) {
      reject(error)
    }
  })

}