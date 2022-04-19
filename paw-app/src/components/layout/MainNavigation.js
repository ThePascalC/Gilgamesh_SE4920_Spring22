import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import classes from './MainNavigation.module.css';
import { useEffect,useState } from 'react';

// import pawLogo from './path/images.png';
function MainNavigation() {
  const [currentUser, setCurrentUser] = useState('');

  function logOut(){
    AuthService.logout();
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser(user);
    }
  },[]);

  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to='/'>
        {/* <img src={pawLogo} className='googleLogo'  */}
        Pawsible</Link></div>
      <nav>
        <ul>
          <li>
            <Link to='/how-it-works'>About Us</Link>
          </li>
          {/* <li>
            <Link to='/Data'>Data</Link>
          </li> */}
          {currentUser ? (
            <>
          <li>
            <Link to='/get-started'>Register</Link>
          </li>
          <li>
          <a href="/sign-in" className="nav-link" onClick={logOut()}>
                  Log Out
          </a>
          </li>
          </>
          ) : 
          (
            <>
          <li>
            <Link to='/get-started'>Register</Link>
          </li>
          <li>
            <Link to='/sign-in'>Sign In</Link>
          </li>
          </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;