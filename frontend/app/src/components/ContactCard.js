import axios from "axios";

function ContactCard({contact,refresh}){

  const deleteContact=async()=>{
    await axios.delete(
      `http://localhost:5000/api/contacts/${contact._id}`
    );

    refresh();
  };

  const initials=contact.name
    .split(" ")
    .map(n=>n[0])
    .join("")
    .toUpperCase();

  return(

    <div className="contact-card">

      <div className="avatar">
        {initials}
      </div>

      <div className="contact-info">

        <h4>{contact.name}</h4>

        <p>{contact.phone}</p>

        <p>{contact.email}</p>

        <button
        className="delete-btn"
        onClick={deleteContact}
        >
          Delete
        </button>

      </div>

    </div>

  );
}

export default ContactCard;