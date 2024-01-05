import { useDispatch } from "react-redux"
import { createContact } from "../reducers/phoneReducer"
import { setNotification, clearNotification } from "../reducers/notificationReducer"

const NewContact = () => {
    const dispatch = useDispatch()

    const addContact = (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const number = e.target.number.value 
        e.target.name.value = ''
        e.target.number.value = ''
        dispatch(createContact({name, number}))
        dispatch(setNotification({message: `${name} added`}))
        dispatch(clearNotification())
      }
      
  return (
    <form onSubmit={addContact} className=" flex flex-col">
      <div className="flex">
        <label>Name</label>
        <input className=" bg-slate-200 rounded-md outline-none m-2 px-4 py-2 w-2/12" name="name" />
      </div>

      <div className="flex">
        <label>Number</label>
        <input className=" bg-slate-200 rounded-md outline-none px-4 py-2 w-2/12" name="number" />
      </div>

        <button type="submit" className=" bg-blue-700 w-12 rounded-md m-2">add</button>      
    </form>
  )
}

export default NewContact