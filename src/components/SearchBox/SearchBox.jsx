import css from './SearchBox.module.css'
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectTextFilter } from "../../redux/filtersSlice";


export default function SearchBox (){
    const searchId = useId();
    const dispatch = useDispatch();
    const textFilter = useSelector(selectTextFilter);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };

    return (
        <div className={css.findcontacts}>
            <label className={css.title} htmlFor={searchId}>Find contacts by name</label>
            <input className={css.textinput} type="text" value={textFilter} onChange={handleChange}></input>
        </div>
    )
}
// value={currentFilteredName}