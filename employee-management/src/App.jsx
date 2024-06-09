import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmployeeTable from './components/EmployeeTable';
import AddEmployeeForm from './components/AddEmployeeForm';
import EditEmployeeForm from './components/EditEmployeeForm';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<EmployeeTable />} />
      <Route path="/add" element={<AddEmployeeForm />} />
      <Route path="/edit/:id" element={<EditEmployeeForm />} />
    </Routes>
  </Router>
);

export default App;
