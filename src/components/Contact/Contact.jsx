import css from "./Contact.module.css";
// import { nanoid } from 'nanoid';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';


export default function Contact ({contacts: {name, number, id}, onDelete}) {

    return (
        <>
            <div className={css.inform}>
                            <span className={css.contact}>
                            <FaUser className={css.icon} />
                                {name}</span>
        
                            <span className={css.contact}>
                            <BsFillTelephoneFill className={css.icon} />
                            {number}</span>
                        </div>
                        <button className={css.buttondelete} onClick={() => onDelete(id)}><span>Delete</span></button>

        </>

    )
}