
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import { PrivateRoute } from './Components/PrivateRoute'
import AddJob from './Pages/AddJobPage/AddJob';
import JobFinder from './Pages/JobFinder/JobFinder';
import UpdateJob from './Pages/UpdateJobPage/UpdateJob';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route
          path='/jobfinder'
          element={<PrivateRoute Cmp={JobFinder} />}
        />
        <Route
          path='/updatejob'
          element={<PrivateRoute Cmp={UpdateJob} />}
        />
      </Routes>
      <ToastContainer position='top-center' />
    </Router>
  );
}

export default App;
