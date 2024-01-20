import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	
    const { store, actions } = useContext(Context);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

	const handleSubmit = e => {
		e.preventDefault();
		actions.saveContact(form);
		setForm({ fullName: "", email: "", phone: "", address: "" }); // limpar o formulário
	};
	
    return (
        <div className="container">
            <h1 className="text-center mt-5">Add a new contact</h1>
            <form onSubmit={handleSubmit} class="mb-3">
			    <label class="form-label mt-4">Full Name</label>
                <input class="form-control" type="text " name="fullName" placeholder="Full Name" onChange={handleChange} />
				<label class="form-label mt-4">Email</label>
                <input class="form-control" type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
				<label class="form-label mt-4">Phone</label>
                <input class="form-control" type="tel" name="phone" placeholder="Enter Phone" onChange={handleChange} />
				<label class="form-label mt-4">Address</label>
                <input class="form-control" type="text" name="address" placeholder="Enter Address" onChange={handleChange} />
                <button className="btn btn-primary form-control mt-4" type="submit">Salvar</button>
            </form>
            <br />
            <div>
                <Link to="/" >
				<p><a class="link-opacity-100 " href="#">Voltar para Contato</a></p>
                </Link>
            </div>
        </div>
    );
};
