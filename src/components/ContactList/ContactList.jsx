import css from '../ContactList/ContactList.module.css'
import Contact from '../Contact/Contact'
import { nanoid } from 'nanoid';

export default function ContactList ({contacts, onDelete}){
    // let id=nanoid();
    return (
        // <div>
        //     <Contact contacts={contacts} forDelete={onDelete}/>
        // </div>
         
        <div className={css.contactinfo}>
                    {contacts.map((contacts) =>
                    <div className={css.info} key={nanoid()}>
                        <Contact contacts={contacts}/>
                        <button className={css.buttondelete} onClick={() => onDelete(contacts.id)}><span>Delete</span></button> 
                    </div>)}
                    <div>{contacts.length === 0 && "Your Contacts Folder is empty!"}</div>
                </div>
    )
}