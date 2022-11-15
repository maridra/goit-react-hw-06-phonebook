import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        const checkName = findName(state.contacts, action.payload.name);

        if (!!checkName === true) {
          return;
        }

        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const psdContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

// fn for checking name

const findName = (data, name) => {
  if (data.length === 0) return;

  return data.find(contact => {
    const nameFound = contact.name.toLowerCase().includes(name.toLowerCase());
    if (!!nameFound) {
      alert(`${name} is already in contacts`);
    }
    return nameFound;
  });
};
