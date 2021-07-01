import React,{useContext} from 'react';
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
import { Context } from "./context/Context";

function App() {
  const {user} =useContext(Context);

  return (
    <Router>
      <div className="App">
        <NavBar/>
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>
              <Route path='/register'>
                {user?<Home/>:<Register/>}
              </Route>
              <Route path='/login'>
                {user?<Home/>:<Login/>}
              </Route>
              <Route path='/write'>
                {user?<Write/>:<Register/>}
              </Route>
              <Route path='/settings'>
                {user?<Settings/>:<Register/>}
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
