import React from 'react';
import shortid from 'shortid';

export default function contactList({ contactList }) {
  return (
    <ul className={'js-list'}>
      {contactList.map(({ name, number }) => {
        return (
          <li key={shortid.generate()}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
}
