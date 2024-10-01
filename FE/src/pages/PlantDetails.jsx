import { useLocation } from "react-router-dom";
import Widget from './../components/layout/Widget'
import Skeleton from "../components/dummy/skeleton";

export default function PlantDetails () {
	
	const {state} = useLocation();
	return (
		<div>
			<Widget title={state.name}>
				<div className="bloxk xl:flex">
					<div className="mb-8 xl:mb-0">
						<Skeleton className="m-auto" type="img" />
					</div>
					<div className="md:flex justify-between block">
						<div className="xl:ml-40">
							<div className="font-bold">Information:</div>
							<div>Name: {state.name}</div>
							<div>Passport: {state.passportNumber}</div>
							<div>Arrival Date: {state.arrivalDate}</div>
							<div>Seller: {state.seller}</div>
						</div>
						<div className="xl:ml-40">
							<div className="font-bold">Plant Protection:</div>
							<div>Pests: {state.protection.pests}</div>
							<div>Date: {state.protection.date}</div>
							<div>Plant Protection Product: {state.protection.product}</div>
						</div>
					</div>
				</div>
			</Widget>
		</div>
	);
}
	