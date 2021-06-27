import React from 'react';
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <Write/> */}
      {/* <Settings/> */}
      <Login/>
    </div>
  );
}

export default App;
