
import { useState } from "react";
import axios from "axios";

function AddContact({closeForm,refresh}){

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

    refresh();
    closeForm();
  };

  return(

    <div className="modal-overlay">

      <div className="modal">

        <h3>Add Contact</h3>

        <form onSubmit={handleSubmit}>

          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
          />

          <div className="modal-buttons">

            <button type="submit" className="save-btn">
              Save
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={closeForm}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddContact;