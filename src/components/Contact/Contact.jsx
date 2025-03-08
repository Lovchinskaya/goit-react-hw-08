import css from "./Contact.module.css";
import { nanoid } from 'nanoid';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';


export default function Contact ({contacts, forDelete}) {

    return (
        <div className={css.contactinfo}>
            {contacts.map(({id, name, number }) =>
            <div className={css.info} key={nanoid()}>
                <div className={css.inform}>
                    <span className={css.contact}>
                    <FaUser className={css.icon} />
                        {name}</span>

                    <span className={css.contact}>
                    <BsFillTelephoneFill className={css.icon} />
                    {number}</span>
                </div>
                <button className={css.buttondelete} onClick={() => forDelete(id)}><span>Delete</span></button>
            </div>)}
            <div>{contacts.length === 0 && "Your Contacts Folder is empty!"}</div>
        </div>

    )
}