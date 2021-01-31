import React, { Component } from 'react';
import Header from './components/header/index';
import Table from './components/table/Table';
import Container from './components/container/Container';
import Search from './components/search/Search';
import './App.css'
import getEmployees from './utils/API.js';



class App extends Component {
  state = {
    employees: [],
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
    this.setState({ employees: employees.data.results, filterEmployees: employees.data.result });
  };

  handleSearchInput = (event) => {
    const { value } = event.target;
    const employees = this.state.employees.filter((employee) =>
      employee.name.toLowerCase().includes(value)
    );
    this.setState({ search: value, employees });
  };

  render() {
    return (
      <div className='app'>
        <Header />
        <Container handleSearchInput={this.handleSearchInput} >
          {this.state.employees.map((employee, id) => {
            return (
              <Table
                key={id}
                image={employee.picture.large}
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