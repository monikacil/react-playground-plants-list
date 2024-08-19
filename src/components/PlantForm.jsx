import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from "./dummy/Button";
import Input from "./dummy/Input"

export default function PlantForm ({plant, onSavePlant}) {

	const [form, setForm] = useState({
		id: plant ? plant.id : uuidv4(),
		name: '',
		arrivalDate: '',
		passportNumber: ''
	});

	useEffect(() => {
		if(!plant) return
		setForm(plant)
	}, [form, plant])

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.id]: event.target.value ? event.target.value : event.target.defaultValue,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSavePlant(form)
	};

	return (
		<>
		<form onSubmit={handleSubmit}>
			{Object.entries(form).map((obj, idx) => {
				if(obj[0] === 'id') return
				return <Input key={idx + obj[0]} name={obj[0]} defaultValue={plant ? obj[1] : ""} onChange={handleChange}/>
			})}
			<Button text="Save" type="submit" />
		</form>
		</>
		
	);
}
	