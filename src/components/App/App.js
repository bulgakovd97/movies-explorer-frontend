import { useState, useEffect, lazy } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import WrongRoute from '../WrongRoute/WrongRoute';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { ERROR_MESSAGES } from '../../utils/errorMessage';


function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isChecking, setIsChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [noKeyword, setNoKeyword] = useState(false);

  const [checked, setChecked] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const { USER_UPDATE,
          EMAIL_EXISTS,
          BAD_REQUEST,
          NO_AUTH,
          NOT_FOUND,
          NO_KEYWORD, } = ERROR_MESSAGES;
  
          
  const filterMovies = (movies) => {
    const keyword = searchTerm.trim();

    const searchedMovies = movies.filter(movie => {
      if (!keyword) {
        return null;
      } else if (movie.nameRU.toLowerCase().includes(keyword.toLowerCase())) {
        if (checked) {
          return movie.duration <= 40;
        } else {
          return movie;
        }
      } else {
        return null;
      }
    });

    if (searchedMovies.length === 0 && keyword !== '') {
      setNoMoviesFound(true);
    
      setShowError(true);
      setErrorMessage(NOT_FOUND);
    } else if (!keyword) {
      setNoKeyword(true);
      
      setShowError(true);
      setErrorMessage(NO_KEYWORD);
    }

    localStorage.setItem('searched-movies', JSON.stringify(searchedMovies));

    return searchedMovies;
  };
  
  const getUser = (token) => {
    return mainApi
      .getUser(token)
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(err => {
        
      })
  };

  const updateUser = ({ name, email }) => {
    return mainApi
      .updateUser({ name, email })
      .then(userData => {
        setCurrentUser(userData);

        setShowError(false);
        setErrorMessage('');


      })
      .catch(err => {
        setShowError(true);
        setErrorMessage(USER_UPDATE);
      });
  };
  
  const register = ({ name, email, password }) => {
    return mainApi
      .register({ name, email, password })
      .then(() => {
        login({ email, password });

        setShowError(false);
        setErrorMessage('');
      })
      .catch(err => {
        if (err.status === 409) {
          setShowError(true);
          setErrorMessage(EMAIL_EXISTS);
        } else {
          setShowError(true);
          setErrorMessage(BAD_REQUEST);
        }
      });
  };

  const login = ({ email, password }) => {
    return mainApi
      .authorize({ email, password })
      .then(({ token }) => {
        if (token) {
          localStorage.setItem('jwt', token);
          history.push('/movies');
          setIsLoggedIn(true);

          setShowError(false);
          setErrorMessage(false);

          getUser(token);
        } else {
          return;
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setShowError(true);
          setErrorMessage(NO_AUTH);
        } else {
          setShowError(true);
          setErrorMessage(BAD_REQUEST);
        }
      })
      .finally(() => setIsChecking(false));
  };

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    
    if (!jwt) {
      setIsChecking(false);
    } else {
      getUser(jwt);

      return mainApi
        .getUser(jwt)
        .then(data => {
          return data;
        })
        .then(({ name, email }) => {
          setCurrentUser({ name, email });
          setIsLoggedIn(true);
        })
        .catch((err) => {
          logout();
        })
        .finally(() => setIsChecking(false));
    }  
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push('/');
  };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     history.push(history.location.pathname);
  //     setIsChecking(false);
  //   }
  // }, [isLoggedIn, history]);

  useEffect(() => {
    setShowError(false);
    setErrorMessage('');
  }, [location.pathname]);

  useEffect(() => {
    if (isLoggedIn && (location.pathname === '/signin' || location.pathname === '/signup')) {
      history.push('/');
    }
  }, [isLoggedIn, history, location.pathname]);


  return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className='app'>
          
          <Switch>
            <Route exact path='/'>
              <Header isLoggedIn={isLoggedIn} />
              
              <Main />

              <Footer />
            </Route>

            <Route path='/signup'>
              <Register onRegister={register} showError={showError} errorMessage={errorMessage} />
            </Route>
            
            <Route path='/signin'>
              <Login onLogin={login} showError={showError} errorMessage={errorMessage} />
            </Route>

            <ProtectedRoute
              path='/profile'
              component={Profile}
              isLoggedIn={isLoggedIn}
              onUpdateUser={updateUser}
              showError={showError}
              errorMessage={errorMessage}
              isChecking={isChecking}
              onLogout={logout}
            />

            <ProtectedRoute
              path='/movies'
              component={Movies}
              isLoggedIn={isLoggedIn}
              showError={showError}
              setShowError={setShowError}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              noMoviesFound={noMoviesFound}
              setNoMoviesFound={setNoMoviesFound}
              noKeyword={noKeyword}
              setNoKeyword={setNoKeyword}
              filterMovies={filterMovies}
              checked={checked}
              setChecked={setChecked}
              isChecking={isChecking}
            />

            <ProtectedRoute
              path='/saved-movies'
              component={SavedMovies}
              isLoggedIn={isLoggedIn}
              showError={showError}
              setShowError={setShowError}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              noMoviesFound={noMoviesFound}
              setNoMoviesFound={setNoMoviesFound}
              noKeyword={noKeyword}
              setNoKeyword={setNoKeyword}
              filterMovies={filterMovies}
              checked={checked}
              setChecked={setChecked}
              isChecking={isChecking}
            />
            
            <Route path='*'>
              <WrongRoute />
            </Route>
          </Switch>

        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
