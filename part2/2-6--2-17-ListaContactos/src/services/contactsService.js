import axios from 'axios'
const baseUrl = 'https://listadecontactos.onrender.com'

const getAll = () => {
  return axios.get(`${baseUrl}/api/persons`)
}

const create = newObject => {
  return axios.post(`${baseUrl}/api/persons`, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/api/persons/${id}`, newObject)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/api/persons/${id}`);
}

export default { 
 getAll, 
  create, 
  update,
  remove
}