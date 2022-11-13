import axios from 'axios'

export const requestAPI = {
  postRequest(success: boolean) {
    const promise = axios.post('https://neko-cafe-back.herokuapp.com/auth/test', { success: success })
    console.log(promise)
    return promise
  },
}
