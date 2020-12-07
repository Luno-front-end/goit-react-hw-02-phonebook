import React from 'react';

export default function SearchContact({ velue, SearchContact }) {
  return (
    <label>
      Поиск контакта по имени
      <input
        type="text"
        name="filter"
        value={velue}
        onChange={SearchContact}
      ></input>
    </label>
  );
}
