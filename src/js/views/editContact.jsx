import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/demo.css";

const initialContact = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

const EditContact = () => {

    const { actions, store } = useContext(Context)
    const [editContact, setEditContact] = useState(initialContact)

    const { theid } = useParams()

    const handleChange = ({ target }) => {
        setEditContact({
            ...editContact,
            [target.name]: target.value
        })
    }

    const getContact=(theid)=>{
        let result = store.contacts.find((item) => item.id == theid)
        setEditContact(result || initialContact)
    }

    useEffect(() => {
        getContact(theid)
    }, [store.contacts, theid])


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 orientation">
                        <div className="d-flex justify-content-center">
                            <h1>Add a new Contact</h1>
                        </div>
                        <div className="">
                            <div className="justify-content-center">
                                <label>Full Name</label>
                                <input
                                    className="input form-control"
                                    placeholder="Ingrese su nombre"
                                    name="name"
                                    onChange={handleChange}
                                    value={editContact?.name}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input className="input form-control"
                                    placeholder="Ingrese su email"
                                    name="email"
                                    onChange={handleChange}
                                    value={editContact?.email}
                                />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input className="input form-control"
                                    placeholder="Ingrese su numero"
                                    name="phone"
                                    onChange={handleChange}
                                    value={editContact?.phone}
                                />
                            </div>
                            <div>
                                <label>Addres</label>
                                <input className="input form-control"
                                    placeholder="Ingrese su dirección"
                                    name="address"
                                    onChange={handleChange}
                                    value={editContact?.address}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className=" pt-4">
                                    <button type="button" className="btn btn-primary" onClick={()=>actions.editContact(editContact,theid)}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="linkOrientation" to="/contact">Move to contacts</Link>
                </div>
            </div>

        </>
    )
}

export default EditContact;