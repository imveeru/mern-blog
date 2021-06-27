import React from 'react';
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      {/* <Single/> */}
      <Write/>
    </div>
  );
}

export default App;
