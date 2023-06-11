import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'
const create = newObject => {
    return axios.post(baseUrl, newObject)
}
const remove = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then((res) => res.data)
  }
export default {
    create,
    remove
}