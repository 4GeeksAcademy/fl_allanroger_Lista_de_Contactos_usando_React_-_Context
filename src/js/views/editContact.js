// arquivo EditContact.js
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { index } = useParams(); // Obtem o índice do URL
    const [contact, setContact] = useState(store.contacts[index]);

    useEffect(() => {
        setContact(store.contacts[index]);
    }, [store.contacts, index]);

    const handleInputChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.editContact(index, contact);
    };

        return (
            <div className="container" onSubmit={handleSubmit}>
                <h1 className="text-center mt-5">Edit Contact</h1>
            <form onSubmit={handleSubmit} className="mb-3">
                <label className="form-label mt-4">Full Name</label>
                <input className="form-control" type="text" name="fullName" value={contact.fullName} onChange={handleInputChange} />
                <label className="form-label mt-4">Email</label>
                <input className="form-control" type="text" name="email" value={contact.email} onChange={handleInputChange} />
                <label className="form-label mt-4">Phone</label>
                <input className="form-control" type="text" name="phone" value={contact.phone} onChange={handleInputChange} />
                <label className="form-label mt-4">Address</label>
                <input className="form-control" type="text" name="address" value={contact.address} onChange={handleInputChange} />
                <button className="btn btn-primary form-control mt-4" type="submit">Salvar</button>
            </form>
                <Link to="/" >
				<p><a className="link-opacity-100 " href="#">Voltar para Contato</a></p>
                </Link>
            </div>
        );
    };
    