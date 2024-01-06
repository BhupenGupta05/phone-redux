const Contact = ({ contact, handleClick }) => {
  return (
    <div className="flex mb-2">
      <li onClick={handleClick} className=" text-lg">
        {contact.name} : {contact.number}
        </li>
      <button type="submit" className=" bg-slate-500 rounded-sm max-w-fit px-2 ml-4">Delete</button>
    </div>
    
  )
}

export default Contact