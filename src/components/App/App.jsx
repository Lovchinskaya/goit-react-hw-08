import { useState, useEffect } from 'react'
import css from '../App/App.module.css'
import Contacts from '../../contacts.json'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useSelector } from "react-redux";


function App() {
  const contacts = useSelector((state) => state.contacts.items);
 
  return (
<div className={css.container}>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  {contacts.length > 0 && <ContactList />}
</div>
  )}
export default App;
