import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getPlants, addPlant, deletePlant, updatePlant} from '../api/apiCall';
import Table from "./../components/layout/Table"
import Modal from "./../components/layout/Modal";
import PlantForm from "../components/PlantForm"

export default function PlantsList () {

  const navigate = useNavigate();

  const [plants, setPlants] = useState([])
  const [modal, setModal] = useState(null)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
		getPlants(setPlants)
	}, [])

  // Modal for adding plant config
  const newPlantFormConfig = {
    title: "Add new plant",
    children: <PlantForm  onSavePlant={(obj)=> addPlantToList(obj) }/>
  }

  const updatePlantConfig = (plant) => {
    return {
      title: "Edit plant info",
      children: <PlantForm plant={plant} onSavePlant={(obj)=> updatePlant(obj, setPlants)}/>}
  }

  const addPlantToList = (plant)=> {
    addPlant(plant)
    getPlants(setPlants)
  }

  const deletePlantFromList = (id) => {
    deletePlant(id, setPlants) 
  }

  const updatePlantOnList = (plant) => {
    setModal(updatePlantConfig(plant))
    setShowModal(true)
  }

  const goToPlantDetails = (plant) => {
    navigate(`/plants-list/${plant.id}`,{state:plant});
  }

  const openAddPlantModal = () => {
    setModal(newPlantFormConfig)
    setShowModal(true)
  }

  return (
    <>
    <div className="py-4 flex justify-end">
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={()=>openAddPlantModal()}
        >
        Add new plant
      </button>
    </div>
    <Table 
      arrayOfElements={plants} 
      withoutColumnKey="id" 
      onElementClick={(obj)=> goToPlantDetails(obj)} 
      onDeleteClick={(id) => deletePlantFromList(id)} 
      onUpdateClick={(obj) => updatePlantOnList(obj)}
      /> 
    <Modal
      openModal={showModal}
      closeModal={()=>setShowModal(false)}
      config={modal}
    />
    </>
  )
}
