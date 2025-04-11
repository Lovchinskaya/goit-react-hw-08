
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router';
import { AppBar } from '../AppBar/AppBar';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import css from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const TasksPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <div className={css.app}>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/tasks"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<TasksPage />} />
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

















// import { useState, useEffect } from 'react'
// import css from '../App/App.module.css'
// import Contacts from '../../contacts.json'
// import ContactForm from '../ContactForm/ContactForm'
// import SearchBox from '../SearchBox/SearchBox'
// import ContactList from '../ContactList/ContactList'
// import { useDispatch, useSelector } from "react-redux";
// import {fetchContacts} from '../../redux/contactsOps'
// import {
//   selectContacts,
//   selectIsLoading,
//   selectIsError,
// } from "../../redux/contactsSlice";


// function App() {
//   // const contacts = useSelector((state) => state.contacts.items);
//  const dispatch = useDispatch();

//  const contacts = useSelector(selectContacts);
//  const isLoading = useSelector(selectIsLoading);
//  const isError = useSelector(selectIsError);

// useEffect(() => {
// dispatch(fetchContacts())
// },[dispatch]);


//   return (
// {/* <div className={css.container}>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   {isLoading && 'Loading message'}
//   {isError && 'Error message'}
//   <SearchBox />
//   {contacts.length > 0 && <ContactList />}
// </div> */}
//   )}
// export default App;
