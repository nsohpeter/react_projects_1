import { FaTrashAlt, FaEdit } from "react-icons/fa";

const ContactList = () => {
  const contactDetails = [
    {
      id: 1,
      name: "peter",
      email: "apiahpetertoch@gmail.com",
    },
    {
      id: 2,
      name: "Supercode",
      email: "Supercode12@gmail.com",
    },
    {
      id: 2,
      name: "Supercode",
      email: "Supercode12@gmail.com",
    },
    {
      id: 2,
      name: "Supercode",
      email: "Supercode12@gmail.com",
    },
    {
      id: 2,
      name: "Supercode",
      email: "Supercode12@gmail.com",
    },
  ];
  return (
    <div className="ui container">
      <table className="ui celled table">
        <thead className="">
          <tr className="">
            <th className="">Name</th>
            <th className="">Email</th>
            <th className="">Actions</th>
          </tr>
        </thead>
        {contactDetails.map((item, index) => {
          const { name, email } = item;
          return (
            <tbody className="" key={index}>
              <tr className="">
                <td className="">{name}</td>

                <td className="">{email}</td>
                <td>
                  <FaTrashAlt
                    style={{
                      marginRight: "1.5rem",
                      fontSize: "1.8rem",
                      color: "red",
                      cursor: "pointer",
                    }}
                  />
                  <FaEdit
                    style={{
                      marginRight: "1.5rem",
                      fontSize: "1.8rem",
                      color: "green",
                      cursor: "pointer",
                    }}
                  />
                  <button
                    style={{
                      marginRight: "1.5rem",
                      fontSize: "1.5rem",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    view
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ContactList;
