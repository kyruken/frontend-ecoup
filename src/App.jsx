import React from 'react';
import './App.css';

import Homepage from './Homepage';
import Questionpage from './Questionpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/question/:questionId' element={<Questionpage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
