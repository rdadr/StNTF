import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Dashboard from './components/pages/Dashboard/Dashboard';
import SignIn from './components/pages/Sign/SignIn';
import SignUp from './components/pages/Sign/SignUp';
import Marketing from './components/pages/Marketing/Marketing';
import Consulting from './components/pages/Consulting/Consulting';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
