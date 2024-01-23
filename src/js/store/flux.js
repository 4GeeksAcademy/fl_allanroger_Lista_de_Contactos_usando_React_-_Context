const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            saveContact: (contact) => {
                const store = getStore();
                setStore({ contacts: [...store.contacts, contact] });
            },
            deleteContact: (index) => {
                const store = getStore();
                const newContacts = [...store.contacts];
                newContacts.splice(index, 1);
                setStore({ contacts: newContacts });
            },
            editContact: (index, updatedContact) => {
                const store = getStore();
                const newContacts = [...store.contacts];
                newContacts[index] = updatedContact;
                setStore({ contacts: newContacts });
            }
        }
    };
};

export default getState;
