import { createStore } from "redux"

const App = () => {
  const initialContacts = [
    { name: 'Bhupen Gupta',number: '7011179605', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

  const phoneReducer = (state = [], action) => {
    switch(action.type) {
      case 'NEW_CONTACT':
        return [...state, action.payload]
      default:
        return state
    }
  }

  const store = createStore(phoneReducer)

  store.dispatch({
    type: 'NEW_CONTACT',
    payload: {
      name: 'Bhupen Gupta',
      number: '7011179605', 
      id: 1
    }
  })

  return (
    <div>
      <ul>
        {store.getState().map(contact => 
          <li key={contact.id}>
            {contact.name} : {contact.number}
          </li>)}
      </ul>
    </div>
  )
}

export default App