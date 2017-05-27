import axios from 'axios'

export const BASE_URL = 'base/api/'

const axiosInstance = axios.create({
  baseUrl: BASE_URL
})

export default axiosInstance;
