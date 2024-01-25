import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [form, setForm] = useState({
       
        agenda_slug:"allan"
    });

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

	const handleSubmit = e => {
		e.preventDefault();
		const config = {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }
		fetch("https://playground.4geeks.com/apis/fake/contact/", config)
			.then((response) => response.text())
			.catch(error => console.log('error', error))
			.then(response => {
				actions.loadContacts();
				navigate("/");
			});
		
	};
	
    return (
        <div className="container">
            <h1 className="text-center mt-5">Add a new contact</h1>
            <form onSubmit={handleSubmit} className="mb-3">
			    <label className="form-label mt-4">Full Name</label>
                <input className="form-control" type="name " name="full_name" placeholder="Full Name" onChange={handleChange} />
				<label className="form-label mt-4">Email</label>
                <input className="form-control" type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
				<label className="form-label mt-4">Phone</label>
                <input className="form-control" type="phone" name="phone" placeholder="Enter Phone" onChange={handleChange} />
				<label className="form-label mt-4">Address</label>
                <input className="form-control" type="address" name="address" placeholder="Enter Address" onChange={handleChange} />
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
