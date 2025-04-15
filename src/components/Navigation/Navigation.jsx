import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

export default  Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const getLinkStyles = ({ isActive }) => {
  //   return clsx(css.link, isActive && css.active);
  // };

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};