import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  InputValues = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log(value);
  };

  addContact = e => {
    e.preventDefault();
    this.onAlert();

    this.props.onSubmit({ name: this.state.name, number: this.state.number });
    this.resetInputValues();
  };

  resetInputValues = () => {
    this.setState({ name: '', number: '' });
  };

  onAlert = () => {
    this.props.contactList({ name: this.state.name });
  };

  render() {
    //   const  = onAlert;
    return (
      <form onSubmit={this.addContact}>
        <label>
          Им'я
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.InputValues}
            autoComplete="off"
          ></input>
        </label>
        <label>
          Номер
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.InputValues}
            autoComplete="off"
          ></input>
        </label>
        <button type="submite">Додати контакт</button>
      </form>
    );
  }
}
