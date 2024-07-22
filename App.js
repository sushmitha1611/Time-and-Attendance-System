import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Employee Payroll Management System</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name} - {employee.department} - ${employee.salary}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
