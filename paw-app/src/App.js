import { Routes, Route } from 'react-router-dom';
import MapPage from './pages/Map';
import AllMeetupsPage from './pages/AllMeetups';
import GetStartedPage from './pages/GetStarted';
import HowItWorksPage from './pages/HowItWorks';
import SignInPage from './pages/SingIn';
import Layout from './components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Layout>
      <Routes>
      <Route path='/' exact element={<MapPage />}>
        </Route>
        <Route path='/all-meetup' exact element={<AllMeetupsPage />}>
        </Route>
        <Route path='/get-started' element={<GetStartedPage />}>
        </Route>
        <Route path='/how-it-works' element={ <HowItWorksPage />}>
        </Route>
        <Route path='/sign-in' element={ <SignInPage /> }>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
