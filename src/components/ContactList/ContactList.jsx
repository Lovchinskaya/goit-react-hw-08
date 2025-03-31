import css from '../ContactList/ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from "react-redux";

export default function ContactList (){
    const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLocaleLowerCase())
  );
    
        return (   
            <div className={css.contactinfo}>
                        {visibleContacts.map((contacts) =>
                        <div className={css.info} key={contacts.id}>
                            <Contact contact={contacts} />                        
                        </div>)}
                        
                    </div>
        )
    }

