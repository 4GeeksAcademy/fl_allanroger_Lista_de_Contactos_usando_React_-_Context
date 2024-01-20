const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			saveContact: (contact) => {
				const store = getStore();
				setStore({ contacts: [...store.contacts, contact] });
			}
		}
	};
};

export default getState;
