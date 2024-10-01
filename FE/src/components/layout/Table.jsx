import { createTableHeaders, isTableWithoutColumn } from "./../../helpers/createTableHeaders"
import { TrashIcon } from './../../../node_modules/@heroicons/react/16/solid'
import { PencilSquareIcon } from "@heroicons/react/16/solid"

import Skeleton from "../dummy/skeleton"

export default function Table ({goToDetails = "false", arrayOfElements, onElementClick, onDeleteClick, onUpdateClick, withoutColumnKeys}) {

	const headers = createTableHeaders(arrayOfElements, withoutColumnKeys)
	
	return (
	<>
	{ arrayOfElements.length < 1 ? 
	<Skeleton type="table"/>
	: 
	<div className="py-4 flex justify-end">
		<table className="relative overflow-x-auto shadow-md w-full text-sm text-left rtl:text-right text-gray-500">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50">
				<tr className="border-collapse border">
					<th scope="col" className="w-24 max-w-32 px-6 py-3">No</th>
					{headers.map((el) => {
						return <th key={el} scope="col" className="px-6 py-3">
							{el}
						</th>
						})}
					<th scope="col" className="w-36 px-6 py-3">Actions</th>
				</tr>
			</thead>
			<tbody>
				{arrayOfElements.map((obj, idx) => 
				<tr key={obj.name+""+idx} className={`${goToDetails ? "cursor-pointer" : "cursor-default"} bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`} >
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
						<div className="cursor-pointer has-tooltip" onClick={() => onDeleteClick(obj.id)}>
							<span className='tooltip'>Delete</span>
							<button className="align-middle text-center w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-red-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
									type="button">
								<TrashIcon className="size-8 m-auto hover:text-red-100"/>
							</button> 
						</div>
						<div className="cursor-pointer has-tooltip" onClick={() => onUpdateClick(obj)}>
							<span className='tooltip'>Edit</span>
							<button className="align-middle text-center w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-blue-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
									type="button">
								<PencilSquareIcon className="size-8 m-auto hover:text-blue-100"/>
							</button> 
						</div>
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
