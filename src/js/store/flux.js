// arquivo flux.js
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            modalIsOpen: false,
            contactToDelete: null
        },
        actions: {
            saveContact: (contact) => {
                const store = getStore();
                setStore({ contacts: [...store.contacts, contact] });
            },
            openModal: (index) => {
                setStore({ modalIsOpen: true, contactToDelete: index });
            },
            closeModal: () => {
                setStore({ modalIsOpen: false, contactToDelete: null });
            },
            handleDelete: () => {
                const store = getStore();
                const newContacts = [...store.contacts];
                newContacts.splice(store.contactToDelete, 1);
                setStore({ contacts: newContacts, modalIsOpen: false, contactToDelete: null });
            },
            editContact: (index, updatedContact) => {
                const store = getStore();
                const newContacts = [...store.contacts];
                newContacts[index] = updatedContact;
                setStore({ contacts: newContacts });
            },
            loadContacts: () => {
                fetch("https://playground.4geeks.com/apis/fake/contact/agenda/allan")
                .then((response) => response.json())
                .then((response) => {
                    setStore({contacts: response})
                })
                .catch(error => console.log("error" ,error))
            }
        }
    };
};

export default getState;
