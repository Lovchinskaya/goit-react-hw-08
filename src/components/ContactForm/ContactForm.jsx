import css from "./ContactForm.module.css"

export default function ContactForm ({onAdd}){
const handleSubmit = e => {
    e.preventDefault();
    onAdd({
        id: Date.now(),
        name: e.target.elements.text.value,
        number: e.target.elements.number.value
    });
    e.target.reset();
}
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="text">
            </input>
            <label>Number</label>
            <input type="text" name="number">
            </input>
            <button type="submit" >Add Contacts</button>
       </form>

    );
}
