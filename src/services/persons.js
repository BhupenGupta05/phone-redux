import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (contact) => {  
    const contactObj = {
        name: contact.name,
        number: contact.number
    }  
    const response = await axios.post(baseUrl, contactObj)  
    return response.data
}

const update = async (existingContact) => {
    const response = await axios.put(`${baseUrl}/${existingContact.id}`, existingContact)
    return response.data
}

export default { getAll, create, update }