import React, { useState } from "react";
import "./App.css";

function App() {

  const [contacts, setContacts] = useState([
    {
      name: "Gary Powell",
      phone: "222-555-333",
      email: "gary@example.com"
    },
    {
      name: "John Kelly",
      phone: "222-444-111",
      email: "john@example.com"
    }
  ]);

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const addContact = () => {
    if (newContact.name === "" || newContact.phone === "") return;

    setContacts([...contacts, newContact]);

    setNewContact({
      name: "",
      phone: "",
      email: ""
    });
  };

  const deleteContact = (index) => {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  };

  return (
    <div className="app">

      <h1 className="title">Contact Manager</h1>

      <div className="add-contact">

        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Phone"
          value={newContact.phone}
          onChange={(e) =>
            setNewContact({ ...newContact, phone: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
        />

        <button onClick={addContact}>Add Contact</button>

      </div>

      <div className="contacts-grid">

        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>

            <div className="avatar">
              {contact.name.charAt(0)}
            </div>

            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>

            <button
              className="delete-btn"
              onClick={() => deleteContact(index)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;