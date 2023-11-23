import React from 'react';
import css from '../contactslist/contactslist.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name }) => (
      <li key={id} className={css.contactItem}>
        <p className={css.contactName}>{name}</p>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
