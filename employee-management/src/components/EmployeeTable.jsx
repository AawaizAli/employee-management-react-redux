import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Table } from 'antd';
import { deleteEmployee } from '../features/employees/employeesSlice';
import { Link } from 'react-router-dom';

const EmployeeTable = () => {
  const employees = useSelector(state => state.employees.employees);
  const dispatch = useDispatch();

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <img src={image} alt="employee" style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link className='button' to={`/edit/${record.id}`}>Edit</Link> {/* Pass id in the link */}
          <a className='button' onClick={() => handleDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  const handleDelete = (record) => {
    dispatch(deleteEmployee(record));
  };

  const data = employees.map((employee, index) => ({
    ...employee,
    key: index, // Using index as the key, adjust if necessary
  }));

  return <Table className='table' columns={columns} dataSource={data} />;
};

export default EmployeeTable;
