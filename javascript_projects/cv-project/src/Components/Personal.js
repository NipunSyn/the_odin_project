import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      email: "",
      number: "",
    };
  }

  //   Event Handlers

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleEMail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleNumber = (event) => {
    this.setState({
      number: event.target.value,
    });
  };

  handleAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleState = (event) => {
    this.setState({
      state: event.target.value,
    });
  };

  handlePincode = (event) => {
    this.setState({
      pincode: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* personal info */}
        <div>
          <fieldset>
            <legend>Personal Information</legend>
            <div>
              <label>First Name</label>
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstName}
              ></input>
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                value={this.state.lastName}
                onChange={this.handleLastName}
              ></input>
            </div>
            <div>
              <label>Personal E-mail</label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleEMail}
              ></input>
            </div>
            <div>
              <label>Contact Number</label>
              <input
                type="text"
                value={this.state.number}
                onChange={this.handleNumber}
              ></input>
            </div>
          </fieldset>
        </div>
        {/* address */}
        <div>
          <fieldset>
            <legend>Address</legend>
            <div>
              <label>Address</label>
              <input
                type="text"
                value={this.state.address}
                onChange={this.handleAddress}
              ></input>
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleCity}
              ></input>
            </div>
            <div>
              <label>State</label>
              <input
                type="text"
                value={this.state.state}
                onChange={this.handleState}
              ></input>
            </div>
            <div>
              <label>Pincode</label>
              <input
                type="text"
                value={this.state.pincode}
                onChange={this.handlePincode}
              ></input>
            </div>
          </fieldset>
        </div>
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    );
  }
}

export default Personal;
