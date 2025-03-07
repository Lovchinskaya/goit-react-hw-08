import css from './SearchBox.module.css'

export default function SearchBox ({value, onFilter}){
    return (
        <div className={css.findcontacts}>
            <label className={css.title}>Find contacts by name</label>
            <input className={css.textinput} type="text" value={value} onChange={(e => onFilter(e.target.value))}></input>
        </div>
    )
}