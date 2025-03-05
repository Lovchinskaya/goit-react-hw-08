import { useState } from 'react'
import './App.css'
import Contacts from '../../contacts.json'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'



function App() {
  const [contact, setContact] = useState(Contacts);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    setContact ((prevContacts) => {
      return[...prevContacts, newContact]
      
    });
  }

  const onDelete = (contactId)=> {
    setContact((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId)
    }
    )
  }

  const filteredContacts = contact.filter((cont) =>
  cont.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
<div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
  <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList contacts={filteredContacts} onDelete={onDelete}/>
</div>
  )}
export default App;
