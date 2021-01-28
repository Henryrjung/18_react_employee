import React, { Component } from "react";
import Header from "./components/header/index";
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
      </div>
    );
  }
}

export default App;
