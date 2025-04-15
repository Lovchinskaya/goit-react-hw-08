import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();

const handleSubmit = (values, actions) => {
  dispatch(register(values))
    .unwrap()
    .then(() => toast.success("User successfully registered!"))
    .catch(() =>
      toast.error("Sorry! Password Min allowed lenght (7), Email min (13)")
    );
  actions.resetForm();
};

return (
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit" className={css.button}>Register</button>
      </Form>
    </Formik>
  </>
);
}


// export const RegisterForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );

//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
