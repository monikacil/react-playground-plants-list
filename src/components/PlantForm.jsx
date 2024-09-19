import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "./dummy/Button";
import Input from "./dummy/Input"

export default function PlantForm ({plant, onSavePlant}) {

	const [form, setForm] = useState({
		id: plant ? plant.id : uuidv4(),
		name: '',
		arrivalDate: '',
		passportNumber: '',
		seller: ''
	});

	useEffect(() => {
		if(!plant) 
			return
		setForm(plant)
	}, [plant])

	const handleChange = (value, id) => {
		setForm((prevFormData) => ({ ...prevFormData, [id]: value, }));
	};

	const isValid = (form) => {
		let validCount = 0;
		Object.entries(form).forEach((obj) => {
			obj[1] ? validCount++ : null
		})
		if(Object.entries(form).length !== validCount) {
			return false
		}
		return true
	}
 
	const handleSubmit = (event) => {
		event.preventDefault();
		if(!isValid(form))
			return 
		onSavePlant(form)
	};

	return (
		<>
		<form onSubmit={handleSubmit}>
			<div className="mb-5">
			{Object.entries(form).map((obj, idx) => {
				if(obj[0] === 'id') return
				return <Input key={idx + obj[0]} name={obj[0]} defaultValue={plant ? obj[1] : ""} onChange={handleChange}/>
			})}
			</div>
			<Button text="Save" type="submit" />
		</form>
		</>
		
	);
}
	