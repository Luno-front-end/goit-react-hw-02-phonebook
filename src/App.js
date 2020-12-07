import React from 'react';
// import shortid from 'shortid';

import Form from './components/Form';
import ContactList from './components/ContactList';
import SearchContact from './components/SearchContact';

export default class Mobile extends React.Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56' },
      { name: 'Hermione Kline', number: '443-89-12' },
      { name: 'Eden Clements', number: '645-17-79' },
      { name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState({
      contacts: [contact, ...this.state.contacts],
    });
  };

  veluesFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log(value);
  };
  getFilter = () => {
    const { filter, contacts } = this.state;
    const filterValues = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValues),
    );
  };
  errorMesage = (names, numbers) => {
    console.log('тут повинен бути name з контактів ', this.state.contacts.name);
    console.log(
      'тут повинен бути масив обєктів з контактів ',
      this.state.contacts,
    );
    console.log('тут повинен бути names з форми', names);

    // if(Object.values({}))
    // const contactName = [];
    // const { contacts } = this.state;
    // contacts.map(contact => contact[name]);
    // contacts.;
    // contacts.includes(number);
  };
  // filterContact;
  render() {
    const filterContact = this.getFilter();
    // const alert = this.onAlert;
    return (
      <div>
        <h1>Телефонна книга</h1>
        <Form onSubmit={this.addContact} contactList={this.errorMesage} />
        <h2>Контакти</h2>
        <SearchContact
          velue={this.state.filter}
          SearchContact={this.veluesFilter}
        />
        <ContactList contactList={filterContact} />
      </div>
    );
  }
}
// а з аргумента name, приходить те що я вводжу в інпут name...
