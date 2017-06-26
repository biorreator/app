import axios from 'axios'

export const BASE_URL = 'https://bioreator-pi.herokuapp.com/api/'

const axiosInstance = axios.create({
  baseUrl: BASE_URL
})

export default axiosInstance;
