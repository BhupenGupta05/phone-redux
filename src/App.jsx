import Contacts from "./components/Contacts"
import Filter from "./components/Filter"
import NewContact from "./components/NewContact"

const App = () => {

  return (
    <div>
      <h2>Phone Directory</h2>
      <NewContact />
      <Filter />
      <Contacts />
    </div>
  )
}

export default App