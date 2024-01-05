import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { name: 'Bhupen Gupta',number: '7011179605', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]

const generateId = () =>  Number((Math.random() * 1000000).toFixed(0))

const phoneSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    createContact(state, action) {
      const {name, number} = action.payload
      state.push({
        name,
        number,
        id: generateId()
      })
    },
    updateContact(state, action) {
      const { id, number} = action.payload
      const existingContact = state.find(c => c.id === id)
      const updatedContact = {
        ...existingContact,
        number: number
      }
      return state.map(contact =>
        contact.id !== id ? contact : updatedContact 
      )
    }
  }
})

export const { createContact, updateContact } = phoneSlice.actions
export default phoneSlice.reducer
