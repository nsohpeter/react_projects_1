const AddContact = () => {
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input placeholder="Name" />
        </div>
        <div className="field">
          <label>Email</label>
          <input placeholder="Email" />
        </div>

        <button className="ui button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddContact;
