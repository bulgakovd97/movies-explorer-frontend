import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import WrongRoute from '../WrongRoute/WrongRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className='app'>
      
      <Switch>
        <Route exact path='/'>
          <Header />
          
          <Main />

          <Footer />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>
        
        <Route path='/signin'>
          <Login />
        </Route>
        
        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        
        <Route path='*'>
          <WrongRoute />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
