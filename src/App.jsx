import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = window.localStorage.getItem("saved-contact");

    return savedContact ? JSON.parse(savedContact) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (deletecontactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== deletecontactId);
    });
  };

  const [inputValue, setInputValue] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="box">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      {contacts.length > 1 && (
        <SearchBox inputValue={inputValue} onSearch={setInputValue} />
      )}
      {contacts.length > 0 && (
        <ContactList contacts={filterContacts} onDelete={deleteContact} />
      )}
    </div>
  );
}

export default App;
