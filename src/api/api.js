import axios from 'axios'

// config axios
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'applicaotion/x-www-form-urlencded'
}



export const get_pets_of_user = params => {
  return axios.get('/pets/get_pets_of_user')
}


export const get_pet_from_id = params => {
  return axios.post('/pets/get_pet_info_from_id')
}

export const get_pet_info_from_idlist = params => {
  return axios.post('/pets/get_pet_info_from_idlist',params)
}
