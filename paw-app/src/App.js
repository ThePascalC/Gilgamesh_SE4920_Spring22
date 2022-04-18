import { Routes, Route, withRouter } from 'react-router-dom';
import MapPage from './pages/Map';
import GetStartedPage from './pages/GetStarted';
import HowItWorksPage from './pages/HowItWorks';
import Data from './pages/Data'
import SignInPage from './pages/SignIn';
import Layout from './components/layout/Layout';
import Footer from './pages/Footer';
import AuthService from './services/auth.service';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';

function App() {

  const [currentUser, setCurrentUser] = useState('');

  function logOut() {
     AuthService.logout();
   }
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if(user){
      setCurrentUser(user);
    }
  },[]);
  

  return (
    <Layout>
      <Routes>
      <Route path='/' exact element={<MapPage />}>
        </Route>
        <Route path='/Data' exact element={<Data />}>
        </Route>
        <Route path='/get-started' element={<GetStartedPage />}>
        </Route>
        <Route path='/how-it-works' element={ <HowItWorksPage />}>
        </Route>
        <Route path='/sign-in' element={ <SignInPage /> }>
        </Route>
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
