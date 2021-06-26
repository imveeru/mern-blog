import React from 'react';
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Home/> */}
      <Single/>
    </div>
  );
}

export default App;
