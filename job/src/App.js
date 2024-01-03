// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import { PrivateRoute } from './Components/PrivateRoute'
import AddJob from './Pages/AddJobPage/AddJob';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Register forLogin={false}  />}
        />
        <Route
          path="/login"
          element={<Register forLogin={true} />}
        />
        <Route
          path="/addjob"
          element={<PrivateRoute Cmp={AddJob}/>}
        />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
