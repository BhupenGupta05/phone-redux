import { createSlice } from "@reduxjs/toolkit"
import phoneService from '../services/persons'

// const initialState = [
//     { name: 'Bhupen Gupta',number: '7011179605', id: 1 },
//     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
// ]

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

export default phoneSlice.reducer
