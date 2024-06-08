import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editEmployee } from '../features/employees/employeesSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployeeForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState('');
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const employees = useSelector(state => state.employees.employees);

  useEffect(() => {
    const employee = employees.find(emp => emp.id === Number(id));
    if (employee) {
      setImage(employee.image);
      setEditFirstName(employee.firstName);
      setEditLastName(employee.lastName);
      setPhoneNumber(employee.phoneNumber);
    }
  }, [employees, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedEmployee = {
      id: Number(id),
      image,
      firstName: editFirstName,
      lastName: editLastName,
      phoneNumber,
    };
    dispatch(editEmployee(editedEmployee));
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={editFirstName}
            onChange={(e) => setEditFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={editLastName}
            onChange={(e) => setEditLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployeeForm;
