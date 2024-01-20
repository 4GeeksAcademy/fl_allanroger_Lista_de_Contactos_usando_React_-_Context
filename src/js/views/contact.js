// arquivo contact.js
import React, { useContext } from "react"; // Adicione useContext aqui

import { Context } from "../store/appContext"; // Certifique-se de que o caminho está correto

import "../../styles/contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
    const { store } = useContext(Context); // Adicione esta linha

    return (
        <div>
            <div className="btn-addcoontact">
                <Link to="/demo">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
        
            <div>
                <h1 className="mb-4 position-absolute top-1 start-50 translate-middle-x">CONTACT!</h1>
                {store.contacts.map((contact, index) => (
                    <div className="formcontact" key={index}>
                        <ul className="list-group ">
                        <li className="list-group-item">
                        <h2>{contact.fullName}</h2>
                        <p>Email: {contact.email}</p>
                        <p>Telefone: {contact.phone}</p>
                        <p>Endereço: {contact.address}</p>
                        </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
