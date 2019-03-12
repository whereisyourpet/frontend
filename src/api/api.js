import axios from 'axios'

// config axios
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}



export const get_pets_of_user = params => {
  return axios.get('/pets/get_pets_of_user',params)
}
