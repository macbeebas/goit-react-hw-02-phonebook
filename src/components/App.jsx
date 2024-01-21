import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from './Section/Section.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactsList } from './ContactsList/ContactsList.jsx';
import { Phonebook } from './Phonebook/Phonebook.jsx'; // Phonebook.jsx

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    Notify.success(`Contact ${name}: ${number} added successfully`);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  showContacts = () => {
    return this.state.contacts.filter(c =>
      c.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className="container">
        <div className="components-list">
          <p>STEP#3</p>
          <Section title="Phonebook">
            <Phonebook onSubmit={this.addContact} />
          </Section>
          <Section title="Contacts">
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactsList contacts={this.showContacts()} />
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
