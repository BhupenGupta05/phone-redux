import { useDispatch } from "react-redux"
import { createContact } from "../reducers/phoneReducer"

const NewContact = () => {
    const dispatch = useDispatch()

    const addContact = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const number = e.target.number.value 
        e.target.name.value = ''
        e.target.number.value = ''
        dispatch(createContact(name, number))
      }
  return (
    <form onSubmit={addContact}>        
        <input name="name" />         
        <input name="number" />         
        <button type="submit">add</button>      
    </form>
  )
}

export default NewContact