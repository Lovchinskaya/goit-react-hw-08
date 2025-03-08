import { useState, useEffect } from 'react'
import css from '../App/App.module.css'
import Contacts from '../../contacts.json'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'

// why not work?

function App() {
  
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      return parsedContacts;
    } 

    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });


  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (newContact) => {
    setContacts ((prevContacts) => {
      return[...prevContacts, newContact]
      
    });
  }

  const onDelete = (contactId)=> {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId)
    }
    )
  }

  const filteredContacts = contacts.filter((cont) =>
  cont.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
<div className={css.container}>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
  <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList contacts={filteredContacts} onDelete={onDelete}/>
</div>
  )}
export default App;
