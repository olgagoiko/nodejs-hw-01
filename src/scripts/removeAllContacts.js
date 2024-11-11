import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const arrayContacts = [];
    await writeContacts(arrayContacts);
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
