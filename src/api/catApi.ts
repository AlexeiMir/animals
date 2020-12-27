import axios from 'axios'
import { Cat } from '../store/ducks/cats/state'

export interface Response<T> {
    data: T
}

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers:{
        "x-api-key": "37ccacb6-7bdb-4683-b604-11374efe69c5"
    }
})

export const catApi = {
    async getCats(): Promise<Cat[]>{
        const {data} = await instance.get<Response<Cat[]>>('breeds')
        return data.data
    }
}