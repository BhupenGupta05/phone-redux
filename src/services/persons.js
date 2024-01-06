import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (contact) => {  
    const response = await axios.post(baseUrl, contact)  
    return response.data
}

const update = async (existingContact) => {
    const response = await axios.put(`${baseUrl}/${existingContact.id}`, existingContact)
    return response.data
}

export default { getAll, create, update }