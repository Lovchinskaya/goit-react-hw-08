import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
// import Loader from "../../components/loader/Loader";
// import Error from "../../components/error/Error";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your Contact Book</h1>
      <ContactForm />
      {isLoading && `Loading message`}
      {isError && `Error` }
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}