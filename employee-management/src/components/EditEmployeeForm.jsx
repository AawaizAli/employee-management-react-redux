import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editEmployee } from '../features/employees/employeesSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployeeForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees.employees);

  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    image: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  useEffect(() => {
    console.log('Editing employee with id:', id); // Debugging log
    const employee = employees.find((emp) => emp.id === Number(id));
    if (employee) {
      setInitialValues(employee);
      form.setFieldsValue(employee);
    }
  }, [employees, id, form]);

  const onFinish = (values) => {
    dispatch(editEmployee({ ...values, id: Number(id) }));
    navigate('/');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="edit-employee"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600, margin: 'auto' }}
      initialValues={initialValues}
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
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditEmployeeForm;
