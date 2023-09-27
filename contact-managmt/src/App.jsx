import AddContact from "./Components/AddContact";
import ContactCard from "./Components/ContactCard";
import Header from "./Components/Header";
//import ContactList from "./Components/ContactList";

function App() {
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactCard />
    </div>
  );
}

export default App;
