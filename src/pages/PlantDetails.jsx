import { useLocation } from "react-router-dom";

export default function PlantDetails () {
	
	const {state} = useLocation();

	return (
		<div>Plant {state.name}</div>
	);
}
	