import Contacts from "./components/Contacts"
import NewContact from "./components/NewContact"

const App = () => {

  return (
    <div>
      <h2>Phone Directory</h2>
      <NewContact />
      <Contacts />
    </div>
  )
}

export default App