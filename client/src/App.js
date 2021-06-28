import React from 'react';
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'

function App() {
  const userLoggedIn =false;
  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/register'>
                {userLoggedIn?<Home/>:<Register/>}
              </Route>
              <Route path='/login'>
                {userLoggedIn?<Home/>:<Login/>}
              </Route>
              <Route path='/write'>
                {userLoggedIn?<Write/>:<Register/>}
              </Route>
              <Route path='/settings'>
                {userLoggedIn?<Settings/>:<Register/>}
              </Route>
              <Route path='/post/:postid'>
                <Single/>
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
