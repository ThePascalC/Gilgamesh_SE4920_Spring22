
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Extra from './pages/extra';
import About from './pages/about';
import SignUp from './pages/signup';
import Index from './pages/index';
import Login from './pages/login';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/index' component={Index} />
        <Route path='/about' component={About} />
        <Route path='/extra' component={Extra} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        
      </Switch>
      
    </Router>
  );
}
  
export default App;

