import React, {useContext,useState}from "react";
import "../../styles/AddContact.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const AddContact = () => {

	const {store,actions} = useContext(Context)
	const [contact, setContact] = useState({
		name:"",
		email:"",
		phone:"",
		address:""
	})
	

	const handleChange = ({target}) =>{
		setContact({
			...contact,
			[target.name]: target.value
		})
		
	}
	const addNewContact = () =>	{
		actions.addContact(contact)
	}
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
							<input className="input form-control"
								placeholder="Ingre su nombre"
								name="name"
								onChange={handleChange}
								value={contact.name}
							/>
						</div>
						<div>
							<label>Email</label>
							<input className="input form-control"
								placeholder="Ingrese su email"
								name="email"
								onChange={handleChange}
								value={contact.email}
							/>
						</div>
						<div>
							<label>Phone</label>
							<input className="input form-control"
								placeholder="Ingrese su numero"
								name="phone"
								onChange={handleChange}
								value={contact.phone}
							/>
						</div>
						<div>
							<label>Addres</label>
							<input className="input form-control"
								placeholder="Ingrese su dirección"
								name="address"
								onChange={handleChange}
								value={contact.address}
							/>
						</div>
						<div className="col-12 col-md-6">
							<div className=" pt-4">
								<button type="button" className="btn btn-primary" onClick={addNewContact}>Save</button>
							</div>
						</div>
						</div>
					</div>
					<Link className="linkOrientation" to="/contact">Move to contacts</Link>
				</div>
			</div>
			
		</>
	);

}
export default AddContact;