import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '123-456-7890',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      firstName: 'Jane',
      lastName: 'Smith',
      phoneNumber: '987-654-3210',
    },
    // Add more dummy data as needed
  ],
};


const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    editEmployee: (state, action) => {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp.id !== action.payload.id);
    },
  },
});

export const { addEmployee, editEmployee, deleteEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
