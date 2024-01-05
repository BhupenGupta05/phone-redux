const initialContacts = [
    { name: 'Bhupen Gupta',number: '7011179605', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

const phoneReducer = (state = initialContacts, action) => {
    switch(action.type) {
      case 'NEW_CONTACT':
        return [...state, action.payload]
        
      case 'UPDATE_CONTACT':
        const { id, number} = action.payload
        const existingContact = state.find(c => c.id === id)
        const updatedContact = {
          ...existingContact,
          number: number
        }
        return state.map(contact =>
          contact.id !== id ? contact : updatedContact 
        )
      default:
        return state
    }
}

const generateId = () =>  Number((Math.random() * 1000000).toFixed(0))

export const createContact = (name, number) => {
    return {
      type: 'NEW_CONTACT',      
      payload: {
        name,
        number, 
        id: generateId()
      }   
    }
}

export const updateContact = (id, number) => {
    return {
      type: 'UPDATE_CONTACT',      
      payload: { id, number }   
    }
}

export default phoneReducer
