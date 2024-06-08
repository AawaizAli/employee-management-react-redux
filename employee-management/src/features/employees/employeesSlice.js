import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    {
      id: 1,
      image: '../../../public/avatar2.png',
      firstName: 'Nazeer',
      lastName: 'Bhai',
      phoneNumber: '03146547982',
    },
    {
      id: 2,
      image: '../../../public/avatar_man.png',
      firstName: 'Aawaiz',
      lastName: 'Ali',
      phoneNumber: '03153738555',
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
