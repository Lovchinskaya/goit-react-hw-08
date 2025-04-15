import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
import "./App.module.css";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Getting user data please wait...</strong>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
         
        </Routes>
      </Suspense>
    </Layout>
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
