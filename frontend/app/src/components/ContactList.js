import ContactCard from "./ContactCard";

function ContactList({contacts,refresh}){

  return(

    <div className="contacts-container">

      {contacts.map(contact=>(
        <ContactCard
        key={contact._id}
        contact={contact}
        refresh={refresh}
        />
      ))}

    </div>

  );
}

export default ContactList;