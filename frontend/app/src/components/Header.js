function Header({openForm}){

  return(

    <div className="header">

      <h2>Contacts</h2>

      <div>

        <input
          className="search"
          placeholder="Search for contacts"
        />

        <button
          className="add-btn"
          onClick={openForm}
        >
          + Add Contact
        </button>

      </div>

    </div>

  );
}

export default Header;