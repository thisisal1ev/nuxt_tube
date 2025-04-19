import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: 'http://localhost:4200/v1',
})
