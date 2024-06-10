import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editEmployee } from '../features/employees/employeesSlice';
import { useParams, useNavigate } from 'react-router-dom';
import ImageUpload from './ImageUpload'; // Assuming ImageUpload is in the same directory

const EditEmployeeForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employees.employees);

  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({
    image: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    console.log('Editing employee with id:', id); // Debugging log
    const employee = employees.find((emp) => emp.id === Number(id));
    if (employee) {
      setInitialValues(employee);
      form.setFieldsValue(employee);
      setImageList(employee.image); // Initialize imageList with current employee's image
    }
  }, [employees, id, form]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleImageChange = (fileList) => {
    // Convert lastModifiedDate to serialized format
    const serializedFileList = fileList.map(file => ({
      uid: file.uid,
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate ? file.lastModifiedDate.toISOString() : null,
      // Add any other necessary properties from the file object
    }));
  
    console.log('Serialized fileList:', serializedFileList); // Debugging log
  
    // Update imageList state
    setImageList(serializedFileList);
  };
  
  const onFinish = (values) => {
    const sanitizedValues = { ...values, image: imageList };
    console.log('Sanitized values:', sanitizedValues); // Check the values being dispatched
    dispatch(editEmployee(sanitizedValues));
    navigate('/');
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
      {/* Image Upload Component */}
      <Form.Item label="Upload Image" name="image" rules={[{ required: true, message: 'Please upload an image!' }]}>
        <ImageUpload onChange={handleImageChange} defaultFileList={initialValues.image} />
      </Form.Item>

      <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input first name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please input last name!' }]}>
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
