import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Section } from './section/section';
// import { Filter } from './filter/filter';
import { ContactsList } from './contactslist/contactslist.jsx';
import { Phonebook } from './phonebook/phonebook'; // phonebook.jsx

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'John Doe', number: '123-456-789' },
      { id: 'id-2', name: 'Bob Bobber', number: '234-567-890' },
      // { id: 'id-3', name: 'Olivia Anderson' },
      // { id: 'id-4', name: 'Ethan Mitchell' },
      // { id: 'id-5', name: 'Ava Thompson' },
      // { id: 'id-6', name: 'Noah Parker' },
      // { id: 'id-7', name: 'Sophia Reynolds' },
    ],
    name: '',
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

  render() {
    return (
      <div className="container">
        <div className="components-list">
          {<p>TEST2</p>}
          <Section title="Phonebook">
            <Phonebook onSubmit={this.addContact} />
          </Section>
          <Section title="Contacts">
            <ContactsList contacts={this.state.contacts} />
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
