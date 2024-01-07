import { createSlice } from "@reduxjs/toolkit"
import phoneService from '../services/persons'

const phoneSlice = createSlice({
  name: 'persons',
  initialState: [],
  reducers: {
    createContact(state, action) {
      const {name, number} = action.payload
      const existingObject = state.find(c => c.name === name)

      if(existingObject) {
        existingObject.number = number
      } else {
        state.push({
          name,
          number
        })
      }
    },
    updateContact(state, action) {
      const {id, number} = action.payload
      const existingContact = state.find(c => c.id === id)
      const updatedContact = {
        ...existingContact,
        number: number
      }
      return state.map(contact =>
        contact.id !== id ? contact : updatedContact 
      )
    },
    appendContact(state, action) {      
      state.push(action.payload)    
    },
    setContacts(state, action) {
      return action.payload
    }
  }
})

export const { createContact, updateContact, appendContact, setContacts } = phoneSlice.actions

export const initializeContacts = () => {
  return async dispatch => {
    const persons = await phoneService.getAll()
    dispatch(setContacts(persons))
  }
}

export const createContactAsync = (contact) => {
  return async dispatch => {
    const {name, number} = contact
    const contacts = await phoneService.getAll()
    const existingObject = contacts.find((c) => c.name === name)

      if(existingObject) {
        const updatedObject = {...existingObject, number}
        const updatedContact = await phoneService.update(updatedObject)
        dispatch(updateContact(updatedContact))
      } else {
        const newContact = await phoneService.create(contact)
        dispatch(createContact(newContact))
      }
  }
}

export const updateContactAsync = (existingContact) => {
  return async dispatch => {
    const {id, number} = existingContact
    const contacts = await phoneService.getAll()
    const existingObject = contacts.find((c) => c.id === id)

    if(existingObject) {
      const updatedObject = {...existingObject, number}
      const updatedContact = await phoneService.update(updatedObject)
      dispatch(updateContact(updatedContact))
    }
  }
}

export default phoneSlice.reducer
