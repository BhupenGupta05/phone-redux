import { useDispatch, useSelector } from "react-redux"
import { createContact, updateContact } from "../reducers/phoneReducer"
import { setNotification, clearNotification } from "../reducers/notificationReducer"
import phoneService from '../services/persons'

const NewContact = () => {
    const dispatch = useDispatch()
    const persons = useSelector(state => state.persons)

    const addContact = async (e) => {
        e.preventDefault()
        const name = e.target.name.value 
        const number = e.target.number.value 
        e.target.name.value = ''
        e.target.number.value = ''

        const existingContact = persons.find(c => c.name === name)

        if(existingContact) {
          const confirmation = window.confirm(`${name} already exists. Do you want to update the number?`)

          if(confirmation) {
            const updatedContact = {...existingContact, number}
            await phoneService.update(updatedContact)
            dispatch(updateContact(updatedContact))
            const displayTime = 5
            dispatch(setNotification({ message: `${name}'s number has been updated` }))
            setTimeout(() => {
              dispatch(clearNotification())
            }, displayTime*1000)
          } 
        } else {
          const newContact = await phoneService.create({ name, number })
          dispatch(createContact(newContact))
          const displayTime = 5
          dispatch(setNotification({message: `${name} added`}))
          setTimeout(() => {
            dispatch(clearNotification())
          }, displayTime*1000)
    }
  }
 
  return (
    <form onSubmit={addContact} className=" flex flex-col">
      <div className="flex">
        <label>Name:</label>
        <input className=" bg-slate-200 rounded-md outline-none px-4 py-1 ml-1 mb-4" name="name" />
      </div>

      <div className="flex">
        <label>Number:</label>
        <input className=" bg-slate-200 rounded-md outline-none px-4 py-1 ml-1 mb-4" name="number" />
      </div>

        <button type="submit" className=" bg-blue-700 rounded-sm max-w-fit px-2 py-1 ml-1">Add</button>      
    </form>
  )
}

export default NewContact