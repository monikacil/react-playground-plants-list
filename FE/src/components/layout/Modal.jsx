import { XMarkIcon } from "@heroicons/react/24/outline"

export default function Modal({ openModal, closeModal, config }) {
	return (
		<>
		{openModal ? (
		<>
		<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
			<div className="relative w-full my-6 mx-auto max-w-3xl">
				<div className="p-5 border-0 rounded-lg shadow-lg relative flex flex-col md:w-[80%] bg-white outline-none focus:outline-none">
					<div className="flex justify-between pb-3">
						<div className="self-center text-xl font-semibold">{config.title}</div>
						<div onClick={() => closeModal()} className="px-3 py-3 border rounded max-w-max h-fit text-gray-200 bg-gray-700 hover:text-white hover:bg-gray-500 cursor-pointer">
							<XMarkIcon aria-hidden="true" className="h-4 w-4"/>
						</div>
					</div>
					<hr className="h-0.5 border-t-0 bg-gray-200" />
					<div className="relative">
					{config.children}
					</div>
				</div>
			</div>
		</div>
		<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
		) : null}
		</>
	);
}
