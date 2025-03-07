import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import * as yup from 'yup';
// import { nanoid } from 'nanoid'


const UserSchema = Yup.object().shape({
    name: Yup.string().min(4, "Too Short!").max(50, "Too Long!")
    .required("Please enter your name"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!")
    .required("Please enter your number"),
});

// const phoneSchema = yup.string()
//   .phone('IN', true, '${path} is invalid')
//   .required();
// const phoneSchema = yup.string()
//   .phone("IN", true)
//   .required();

// console.log(phoneSchema.isValidSync("+919876543210"));


export default function ContactForm ({onAdd}){
    const handleSubmit = (values, actions) => {
		console.log(values);
        onAdd(values);
		actions.resetForm();
	};

    return (
        <Formik initialValues={{
            name: " ",
            number: " "
        }} 
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
        >
			<Form className={css.form}>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          />
           
            <label>Number</label>
            <Field type="text" name="number" />
            <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          />
            
            <button type="submit" >Add Contacts</button>
       </Form>
    </Formik>
        

    );
}
