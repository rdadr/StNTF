import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Consulting} from './components/pages/Consulting/Consulting';
import {Marketing} from './components/pages/Marketing/Marketing';
import {Dashboard} from './components/pages/Dashboard/Dashboard';
import {Services} from './components/pages/Services/Services';
import {Products} from './components/pages/Products/Products';
import {SignIn} from './components/pages/SignIn/SignIn';
import {SignUp} from './components/pages/SignUp/SignUp';
import {Home} from './components/pages/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/consulting' component={Consulting} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
