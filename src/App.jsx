import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './App.css';

import Homepage from './Homepage';
import Questionpage from './pages/Questionpage';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Aboutuspage from './pages/Aboutuspage';
import Accountpage from './pages/Accountpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const currentTime = new Date();
      const decodedToken = jwt_decode(JSON.parse(localStorage.getItem('token')));
      if (decodedToken.exp * 1000 < currentTime) {
        localStorage.clear();
      }
    }


  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/question/:questionId' element={<Questionpage />} />
          <Route exact path='/aboutus' element={<Aboutuspage />} />
          <Route exact path='/login' element={<Loginpage />} />
          <Route exact path='/sign-up' element={<Signuppage />} />
          <Route exact path='/account' element={<Accountpage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
