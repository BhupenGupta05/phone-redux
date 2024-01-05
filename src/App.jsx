import Contacts from "./components/Contacts"
import Filter from "./components/Filter"
import NewContact from "./components/NewContact"
import Notification from "./components/Notification"

const App = () => {

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