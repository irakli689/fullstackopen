import axios from "axios";
const baseUrl = 'http://localhost:3001/api/persons'
const create = newObject => {
    return axios.post(baseUrl, newObject)
}
const remove = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req.then((res) => res.data)
}
const get = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const personService={
    create,
    get,
    remove
}
export default personService;