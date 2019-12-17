import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//utils
// import AuthRoute from './utils/AuthRoute';
// import Navbar from './components/Navbar';

//sayfalar
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <div className="container">
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
