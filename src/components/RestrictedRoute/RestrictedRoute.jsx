import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

/**
 * - If the route is restricted and the user is logged in,
 *  render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export default function RestrictedRoute({ component, redirectTo }) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    return isLoggedIn ? <Navigate to={redirectTo} /> : component;
  }
