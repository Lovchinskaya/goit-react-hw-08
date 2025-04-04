import { useState, useEffect } from 'react'
import css from '../App/App.module.css'
import Contacts from '../../contacts.json'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useDispatch, useSelector } from "react-redux";
import {fetchContacts} from '../../redux/contactsOps'
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contactsSlice";


function App() {
  // const contacts = useSelector((state) => state.contacts.items);
 const dispatch = useDispatch();

 const contacts = useSelector(selectContacts);
 const isLoading = useSelector(selectIsLoading);
 const isError = useSelector(selectIsError);

useEffect(() => {
dispatch(fetchContacts())
},[dispatch]);


  return (
<div className={css.container}>
  <h1>Phonebook</h1>
  <ContactForm />
  {isLoading && 'Loading message'}
  {isError && 'Error message'}
  <SearchBox />
  {contacts.length > 0 && <ContactList />}
</div>
  )}
export default App;
