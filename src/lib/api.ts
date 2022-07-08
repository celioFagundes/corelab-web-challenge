import axios from 'axios'
const API = 'http://localhost:3333'
const endpoint = (path: string): string => API + path

const get = async (path: string): Promise<any> => {
  return axios.get(path).then(res => res.data)
}
const put = async (path: string): Promise<any> => {
  return axios.put(endpoint(path))
}
const remove = async (path: string): Promise<any> => {
  return axios.delete(endpoint(path))
}
export const getVehicles = async (path: string) => {
  return get(path)
}
export const removeVehicles = async (id: number) => {
  return remove(`/vehicles/${id}`)
}
export const toggleIsFavorite = async (id: number) => {
  return put(`/vehicles/favorite/${id}`)
}
