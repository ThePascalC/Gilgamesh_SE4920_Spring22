import { Switch, Route, withRouter } from 'react-router-dom';
import MapPage from './pages/Map';
import GetStartedPage from './pages/GetStarted';
import HowItWorksPage from './pages/HowItWorks';
import Data from './pages/Data'
import AccountPage from './pages/Account'; 
import SignInPage from './pages/SignIn';
import Layout from './components/layout/Layout';
import Footer from './pages/Footer';
import AdminPage from './pages/Admin';
import AuthService from './services/auth.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState('');
  // this.logOut = this.logOut.bind(this);
  // logOut() {
  //    AuthService.logout();
  //  }
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser(user);
    }
  },[]);
  console.log(currentUser);

  return (
    <Layout>
      <Switch>
      <Route path='/' exact component={ HowItWorksPage  }>
        </Route>
        <Route path='/Data' exact component={Data }>
        </Route>
        <Route path='/get-started' component={GetStartedPage }>
        </Route>
        <Route path='/map' component={ MapPage }>
        </Route>
        <Route path='/sign-in' component={ SignInPage }>
        </Route>
        <Route path='/account' component={ AccountPage }>
        </Route>
        <Route path='/admin' component={ AdminPage }>
        </Route>
      </Switch>
      <Footer />
    </Layout>
  );
}

export default App;
