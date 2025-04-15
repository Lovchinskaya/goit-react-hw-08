import css from '../ContactList/ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";

export default function ContactList (){
  const contacts = useSelector(selectVisibleContacts);
    
        return (   
            <div className={css.contactinfo}>
                        {contacts.map((contacts) =>
                        <div className={css.info} key={contacts.id}>
                            <Contact contact={contacts} />                        
                        </div>)}
                        
                    </div>
        )
    }

