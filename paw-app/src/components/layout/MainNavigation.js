import { Link } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import classes from './MainNavigation.module.css';
import { useEffect,useState } from 'react';

// import pawLogo from './path/images.png';
function MainNavigation() {
  const [currentUser, setCurrentUser] = useState('');
  const [adminBoard, showAdminBoard] = useState(false);

  function logOut(){
    AuthService.logout();
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser(user);
      if(user.roles.includes("ROLE_ADMIN")){
        showAdminBoard(true);
      }
    }
  },[]);
console.log(currentUser)
console.log(adminBoard);
  return (
    <header className={classes.header}>
      <div className={classes.logo}><Link to='/'>
        {/* <img src={pawLogo} className='googleLogo'  */}
        Pawsible</Link></div>
      <nav>
        <ul>
        {adminBoard ? (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            ) : null}
          {currentUser ? (
            <>
          <li>
            <Link to='/map'>Dog Parks</Link>
          </li>            
          <li>
            <Link to='/'>About Us</Link>
          </li>
          <li>
            <Link to={{pathname: '/Account', state:{currentUser: currentUser} }}>{currentUser.username}</Link>
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
            <Link to='/'>About Us</Link>
          </li>
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