import React, { Component } from "react";
import Header from "./components/header/index";
import Card from './components/card/Card';
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    employees: [],
  };
  
  componentDidMount() {
    this.renderEmployees();
  }

  renderEmployees = async () => {}

  render() {
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
