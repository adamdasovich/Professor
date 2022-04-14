import axios from 'axios'

export const axiosIntance = axios.create({
    baseURL: "https://professor-kennabis.herokuapp.com/backend/"
})