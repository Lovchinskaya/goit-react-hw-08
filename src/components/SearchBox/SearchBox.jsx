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




