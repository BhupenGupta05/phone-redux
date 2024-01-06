import { useDispatch } from "react-redux"
import Contacts from "./components/Contacts"
import Filter from "./components/Filter"
import NewContact from "./components/NewContact"
import Notification from "./components/Notification"
import { useEffect } from "react"
import { initializeContacts } from "./reducers/phoneReducer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeContacts())
  }, [])

  return (
    <div className="flex flex-col m-4 gap-4">
      <Notification />
      <h1 className=" text-3xl font-semibold">Phone Directory</h1>
      <Filter />
      <NewContact />
      <h2 className="text-2xl font-semibold">Contacts</h2>
      <Contacts />
    </div>
  )
}

export default App