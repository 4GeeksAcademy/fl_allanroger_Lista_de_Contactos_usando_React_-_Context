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
                        setStore({ contacts: response })
                    })
                    .catch(error => console.log("error", error))
            },
            // Função para editar um contato
            editContact: (contact_id, updatedContact) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedContact),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then((response) => response.json())
                    .then((response) => {
                        const store = getStore();
                        const newContacts = store.contacts.map(contact =>
                            contact.id === contact_id ? response : contact
                        );
                        setStore({ contacts: newContacts });
                    })
                    .catch(error => console.log("error", error))
            },

            // Função para excluir um contato
            deleteContact: (contact_id) => {
                fetch(`https://playground.4geeks.com/apis/fake/contact/${contact_id}`, {
                    method: "DELETE"
                })
                    .then(() => {
                        const store = getStore();
                        const newContacts = store.contacts.filter(contact => contact.id !== contact_id);
                        setStore({ contacts: newContacts });
                    })
                    .catch(error => console.log("error", error))
            },

        }
    };
};

export default getState;
