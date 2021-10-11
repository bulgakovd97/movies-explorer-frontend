import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {props.isChecking ? (
        <Preloader />
      ) : (
        props.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
      )}
    </Route>
  );
}

export default ProtectedRoute;