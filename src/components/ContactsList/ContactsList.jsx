import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import css from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const normalizedFilterValue = filterValue.toLowerCase();

  const visibleContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilterValue)
      )
    : [];

  return (
    <ol className={css.list}>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <span className={css.text}>
              {contact.name}: {contact.number}
            </span>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                console.log(contact.id);
                return dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ol>
  );
}
