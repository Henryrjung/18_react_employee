import React from "react";
import "./Container.css";

const Container = ({ children, handleSearchInput, ...props }) => {
  return (
    <div className="container">
      <input
        className="search"
        value={props.search}
        name="search"
        onChange={handleSearchInput}
        type="search"
        placeholder="Search"
      />
      <label className="employeeName">Name</label>
      <label className="employeeEmail">Email</label>
      <label className="employeeNumber">Phone Number</label>
      <div className="childContainer">{children}</div>
    </div>
  );
};

export default Container;
