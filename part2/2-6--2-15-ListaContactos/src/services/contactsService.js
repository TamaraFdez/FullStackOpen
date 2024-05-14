import axios from 'axios'
const baseUrl = 'https://fullstackopen-4lxg--4001--34455753.local-credentialless.webcontainer.io/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

export default { 
 getAll, 
  create, 
  update,
  remove
}