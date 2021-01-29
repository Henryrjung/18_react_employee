import React, { Component } from 'react';
import Header from './components/header/index';
import Table from './components/table/Table';
import Container from './components/container/Container';
import './App.css'
import getEmployees from './utils/API.js';



class App extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = async () => {
    const employees = await getEmployees();
    employees.data.results.forEach((employee) => {
      const fullName =
        employee.name.first[0].toUpperCase() +
        employee.name.first.substring(1) +
        ' ' +
        employee.name.last[0].toUpperCase() +
        employee.name.last.substring(1);

      employee.name = fullName;
      employee.email = employee.email;
    });
    this.setState({ employees: employees.data.results });
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <Container>
          {this.state.employees.map((employee, id) => {
            return (
              <Table
                key={id}
                image={employee.picture.medium}
                name={employee.name}
                email={employee.email}
                phone={employee.phone}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default App;