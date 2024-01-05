const Contact = ({ contact, handleClick }) => {
  return (
    <li key={contact.id} onClick={handleClick}>
        {contact.name} : {contact.number}
    </li>
  )
}

export default Contact