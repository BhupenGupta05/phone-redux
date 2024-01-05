import { useDispatch, useSelector } from "react-redux"
import Contact from "./Contact"
import { updateContact } from "../reducers/phoneReducer"

const Contacts = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const contactsToShow = useSelector((state) => state.persons
    .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())))

  return (
    <ul>
        {contactsToShow.map(contact => (
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