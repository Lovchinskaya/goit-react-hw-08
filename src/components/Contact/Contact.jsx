import css from "./Contact.module.css";
// import { nanoid } from 'nanoid';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact ({ contact }) {
    const dispatch = useDispatch();
    const removeContact = () => {
      dispatch(deleteContact(contact.id));
    };
  
    return (
        <>
            <div className={css.inform}>
                            <span className={css.contact}>
                            <FaUser className={css.icon} />
                                {contact.name}</span>
        
                            <span className={css.contact}>
                            <BsFillTelephoneFill className={css.icon} />
                            {contact.number}</span>
                        </div>
                        <button className={css.buttondelete} onClick={removeContact}><span>Delete</span></button>

        </>

    )
}