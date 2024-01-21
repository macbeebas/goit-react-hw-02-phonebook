import React from 'react';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p className={css.contactName}>
          {name}: {number}
        </p>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
