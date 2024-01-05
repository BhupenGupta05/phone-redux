import { useDispatch, useSelector } from "react-redux"
import Contact from "./Contact"
import { updateContact } from "../reducers/phoneReducer"

const Contacts = () => {
    const dispatch = useDispatch()
    const persons = useSelector(state => state)

  return (
    <ul>
        {persons.map(contact => (
            <Contact 
            key={contact.id}
            contact={contact}
            handleClick={() => dispatch(updateContact(contact.id, contact.number))}
            />
        ))}
    </ul>
  )
}

export default Contacts