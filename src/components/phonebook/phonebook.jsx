import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// import { Section } from '../section/section'; // section.jsx
// import { Filter } from '../filter/filter'; // filter.jsx
// import { ContactList } from '../contactslist/contactslist'; // contactslist.jsx

import css from './phonebook.module.css';

import PropTypes from 'prop-types';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };

  render() {
    return (
      <div>
        {/* <form className={css.form} onSubmit={this.handleSubmit}> */}
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </label>
          <button className={css.buttonAdd} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
