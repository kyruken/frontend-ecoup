import React from 'react';
import './App.css';

import Homepage from './Homepage';
import Questionpage from './Questionpage';
import Loginpage from './Loginpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/question/:questionId' element={<Questionpage />} />
          <Route exact path='/login' element={<Loginpage />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
