import css from "./Contact.module.css"

export default function Contact ({contacts, forDelete}) {

    return (
        <div className={css.contactinfo}>
            {contacts.map(({id, name, number }) =>
            <div className={css.info} key={id}>
                <div className={css.inform}>
                    <span>{name}</span>
                    <span>{number}</span>
                </div>
                <button onClick={() => forDelete(id)}>Delete</button>
            </div>)}
        </div>

    )
}