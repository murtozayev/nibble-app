import axios from "axios"

export const API_URL = "https://nibble-api.vercel.app/api"

const $axios = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})

export default $axios