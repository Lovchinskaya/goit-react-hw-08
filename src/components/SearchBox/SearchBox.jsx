import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectTextFilter } from "../../redux/filters/selectors";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const textFilter = useSelector(selectTextFilter);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    dispatch(changeFilter(inputValue));
  };

  return (
    <div className={css.findcontacts}>
      <label htmlFor={searchId} className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={textFilter}
        id={searchId}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;




// import css from './SearchBox.module.css'
// import { useId } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { changeFilter, selectTextFilter } from "../../redux/filtersSlice";


// export default function SearchBox (){
//     const searchId = useId();
//     const dispatch = useDispatch();
//     const textFilter = useSelector(selectTextFilter);

//   const handleChange = (event) => {
//     const inputValue = event.target.value;
//     dispatch(changeFilter(inputValue));
//   };

//     return (
//         <div className={css.findcontacts}>
//             <label className={css.title} htmlFor={searchId}>Find contacts by name</label>
//             <input className={css.textinput} type="text" value={textFilter} onChange={handleChange}></input>
//         </div>
//     )
// }
// value={currentFilteredName}