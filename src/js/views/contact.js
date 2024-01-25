// arquivo contact.js
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/contact.css";
import { Link } from "react-router-dom";
import Modal from 'react-modal';

export const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="btn-addcoontact mb-4">
                <Link to="/demo">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
            <div>
                <h1 className="mb-4 position-absolute top-1 start-50 translate-middle-x">CONTACT!</h1>
                {store.contacts.map((contact, index) => (
                    <div className="formcontact card mx-auto p-4"  key={index}>
                        <div className="d-flex" >
                            <img src="https://th.bing.com/th/id/OIG.MTLFSwxDyHmk8MFUfjej?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="Profile" className="img-fluid rounded-circle car-img-left" style={{width: "200px", height: "200px"}} />
                            <div className="card-body ml-3">
                                <h2>{contact.fullName}</h2>
                                <p>Email: {contact.email}</p>
                                <p>Telefone: {contact.phone}</p>
                                <p>Endereço: {contact.address}</p>
                                <button className="btn btn-danger" onClick={() => actions.openModal(index)}>Eliminar</button>
                                <Link to={`/edit/${index}`}>
                                    <button className="btn btn-warning">Editar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            
            <Modal
                isOpen={store.modalIsOpen}
                onRequestClose={actions.closeModal}
                contentLabel="Example Modal"
            >
                <h2>Tem certeza de que deseja excluir este contato?</h2>
                <button onClick={actions.handleDelete}>Sim</button>
                <button onClick={actions.closeModal}>Não</button>
            </Modal>
        </div>
    );
};
