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

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className={css.formContainer}>
        <form className={css.formMain} onSubmit={this.handleSubmit}>
          <label className={css.formLabel}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChangeName}
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
