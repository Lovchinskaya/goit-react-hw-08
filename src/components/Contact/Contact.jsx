import css from "./Contact.module.css";
import { nanoid } from 'nanoid';

export default function Contact ({contacts, forDelete}) {

    return (
        <div className={css.contactinfo}>
            {contacts.map(({id, name, number }) =>
            <div className={css.info} key={nanoid()}>
                <div className={css.inform}>
                    <span>{name}</span>
                    <span>{number}</span>
                </div>
                <button onClick={() => forDelete(id)}>Delete</button>
            </div>)}
            <div>{contacts.length === 0 && "Your Contacts Folder is empty!"}</div>
        </div>

    )
}