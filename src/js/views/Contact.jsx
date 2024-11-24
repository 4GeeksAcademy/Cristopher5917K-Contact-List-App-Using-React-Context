import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const Contact = () => {
	const context = useContext(Context)
	const [userDelete, setUserDelete] = useState("")
	const {store, actions} = useContext(Context)

	return (
		<div className="container">
			<div>
			<Link to="/">
				<button className="btn btn-primary linkSpace">Add new contact</button>
			</Link>
			{store.contacts.map((item, index)=>
				(
					<div key={index} className="card mb-3 mx-auto">
						<div className="row contact">
									<div className="d-flex align-items-center col-12 col-md-7 gap-5">
										<img src="https://picsum.photos/200/300?random=1" className="rounded-circle" />
										<div className="ms-4">
											<h3>{item.name}</h3>
											<div className="d-flex justify-content-between">
											<p className="contact-info p-3 contactColor"><i className="fa-solid fa-phone"></i> {item.phone}</p>
											<p  className="icon-delete" onClick={()=>actions.deleteContact(item.id)}><i class="fa-solid fa-trash"></i></p>
											</div>
											
											<p className="contact-info p-3 contactColor"><i className="fa-solid fa-envelope"></i> {item.email}</p>
											<p className="contact-info fs-5 p-3 contactColor"><i className="fa-solid fa-location-dot"></i>{item.addres}</p>
										
										</div>
								</div>
								
							</div>
					</div>
				)
				)
			}
			</div>
			
		</div>
	);
};

export default Contact;