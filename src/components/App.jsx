import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { Section } from './section/section';
// import { Filter } from './filter/filter';
import { ContactsList } from './contactslist/contactslist.jsx';
// import { NotificationContainer } from 'react-notifications';

import { Phonebook } from './phonebook/phonebook'; // phonebook.jsx

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'John Doe' },
      { id: 'id-2', name: 'Bob Bobber' },
    ],
    name: '',
  };

  // getVisibleContacts = () => {
  // const { contacts } = this.state;
  // const normalizedFilter = filter.toLowerCase();
  // return contacts(contact => contact.name.toLowerCase());
  // };

  render() {
    // const { filter, contacts, name } = this.state;
    // const totalcontactsCount = contacts.length;
    // const visibleContacts = this.getVisibleContacts();
    // console.log(visibleContacts);
    console.log(this.state);
    console.log(this.state.contacts);
    console.log(...this.state.contacts);
    console.log(this.state.contacts[0].name);

    return (
      <div className="container">
        <div className="components-list">
          {<p>TEST2</p>}
          <Section title="Phonebook">
            <Phonebook />
            {/* <Phonebook onSubmit={this.addContact} /> */}
          </Section>
          <Section title="Contacts">
            <ContactsList contacts={this.state.contacts} />
          </Section>
          {/* <NotificationContainer /> */}
        </div>
      </div>
    );
  }
}

export default App;
