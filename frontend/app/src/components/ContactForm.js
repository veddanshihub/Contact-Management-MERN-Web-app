import { useState } from "react";
import axios from "axios";

function ContactForm({ refresh }) {

  const [contact,setContact]=useState({
    name:"",
    email:"",
    phone:""
  });

  const handleChange=(e)=>{
    setContact({...contact,[e.target.name]:e.target.value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/contacts",
      contact
    );

    setContact({name:"",email:"",phone:""});

    refresh();
  };

  return (

    <div className="form-card">

      <h3>Add Contact</h3>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
        />

        <button>Add Contact</button>

      </form>

    </div>

  );
}

export default ContactForm;