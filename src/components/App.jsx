import { ContactsList, Form, Filter } from 'components';

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

//
