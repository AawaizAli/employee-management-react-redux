import React from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employees/employeesSlice';
import { useNavigate } from 'react-router-dom';

const AddEmployeeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(addEmployee(values));
    navigate('/');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="add-employee"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, margin: 'auto' }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Image URL"
        name="image"
        rules={[{ required: true, message: 'Please input image URL!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input first name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input last name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: 'Please input phone number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddEmployeeForm;
