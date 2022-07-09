import axios from 'axios'
import { IVehicleCreate } from '../types/Vehicle'

const API = 'http://localhost:3333'
const endpoint = (path: string): string => API + path

const get = async (path: string): Promise<any> => {
  return axios.get(path).then(res => res.data)
}
const post = async (path: string, values: IVehicleCreate): Promise<any> => {
  return axios.post(endpoint(path), values)
}
const put = async (path: string, values: IVehicleCreate): Promise<any> => {
  return axios.put(endpoint(path), values)
}
const remove = async (path: string): Promise<any> => {
  return axios.delete(endpoint(path))
}
const postTrigger = async (path: string): Promise<any> => {
  return axios.post(endpoint(path))
}
export const getVehicles = async (path: string) => {
  return get(path)
}
export const createVehicle = async (values: IVehicleCreate) => {
  return post('/vehicles', values)
}
export const editVehicle = async (id: number, values: IVehicleCreate) => {
  return put(`/vehicles/${id}`, values)
}
export const removeVehicles = async (id: number) => {
  return remove(`/vehicles/${id}`)
}
export const getVehicleById = async (path: string) => {
  return get(path)
}
export const toggleIsFavorite = async (id: number) => {
  return postTrigger(`/vehicles/favorite/${id}`)
}
