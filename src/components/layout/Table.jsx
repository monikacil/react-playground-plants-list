import {createTableHeaders, isTableWithoutColumn} from "./../../helpers/createTableHeaders"
import Skeleton from "../dummy/skeleton"

export default function Table ({arrayOfElements, onElementClick, onDeleteClick, onUpdateClick}) {

	const headers = createTableHeaders(arrayOfElements, "id")
	
	return (
	<>
	{ arrayOfElements.length < 1 ? 
	<Skeleton type="table"/>
	: 
	<div className="py-4 flex justify-end">
		<table className="relative overflow-x-auto shadow-md sm:rounded-lg w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" className="px-6 py-3">No</th>
					{headers.map((el) => {
						return <th key={el} scope="col" className="px-6 py-3">
							{el}
						</th>
						})}
					<th scope="col" className="px-6 py-3">Actions</th>
				</tr>
			</thead>
			<tbody>
				{arrayOfElements.map((obj, idx) => 
				<tr key={obj+""+idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
					<td key={obj.id+""+idx} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" onClick={() => onElementClick(obj)}>
						{idx}
					</td>
					{Object.entries(obj).map((el, idx) => {
						if(isTableWithoutColumn(el[0], headers)) return
						return <td key={el+""+idx} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" onClick={() => onElementClick(obj)}>
							{el[1]}
						</td>
						})}
					<td scope="row" className="flex justify-between px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
						<div className="cursor-pointer" onClick={() => onDeleteClick(obj.id)}>delete</div>
						<div className="cursor-pointer" onClick={() => onUpdateClick(obj)}>edit</div>
					</td>
				</tr>
				)}
			</tbody>
		</table>
	</div>
	}
	</>
	)
}
