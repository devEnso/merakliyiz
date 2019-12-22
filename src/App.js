import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './firebaseFolder/Auth';
import PrivateRoute from './firebaseFolder/PrivateRoute';

//utils
// import AuthRoute from './utils/AuthRoute';
// import Navbar from './components/Navbar';

//sayfalar
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

//diger sayfalar
import Sartlar from './pages/Sartlar';
import Gizlilik from './pages/Gizlilik';
import Guvenlik from './pages/Guvenlik';
import Hakkimizda from './pages/Hakkimizda';
import Medya from './pages/Medya';
import Job from './pages/Job';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <Route exact path="/sartlar" component={Sartlar} />
          <Route exact path="/gizlilik" component={Gizlilik} />
          <Route exact path="/guvenlik" component={Guvenlik} />
          <Route exact path="/hakkimizda" component={Hakkimizda} />
          <Route exact path="/medya" component={Medya} />
          <Route exact path="/job" component={Job} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
