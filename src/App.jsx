import { useDispatch } from "react-redux"
import phoneService from './services/persons'
import Contacts from "./components/Contacts"
import Filter from "./components/Filter"
import NewContact from "./components/NewContact"
import Notification from "./components/Notification"
import { useEffect } from "react"
import { setContacts } from "./reducers/phoneReducer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    phoneService
    .getAll()
    .then(contacts => dispatch(setContacts(contacts)))
  }, [])

  return (
    <div>
      <Notification />
      <h2>Phone Directory</h2>
      <NewContact />
      <Filter />
      <Contacts />
    </div>
  )
}

export default App