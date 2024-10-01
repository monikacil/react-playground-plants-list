import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getPlants, addPlant, deletePlant, updatePlant} from '../api/apiCall';
import Table from "../components/layout/Table"
import Modal from "../components/layout/Modal";
import PlantForm from "../components/PlantForm"
import Widget from "../components/layout/Widget";

export default function PlantsCollection () {

  const navigate = useNavigate();

  const [plants, setPlants] = useState([])
  const [modal, setModal] = useState(null)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => getPlants(setPlants), [])

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
    setShowModal(false)
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
    navigate(`/plants-collection/${plant.id}`,{state:plant});
  }

  const openPlantModal = () => {
    setModal(newPlantFormConfig)
    setShowModal(true)
  }

  return (
    <Widget title="PLant List" buttonText="Add new Plant" handleButtonClick={()=>openPlantModal()}>
      <Table 
        goToDetails="true"
        arrayOfElements={plants} 
        withoutColumnKeys={["id", "protection"]}
        onElementClick={(obj)=> goToPlantDetails(obj)} 
        onDeleteClick={(id) => deletePlantFromList(id)} 
        onUpdateClick={(obj) => updatePlantOnList(obj)}
      /> 
      <Modal
        openModal={showModal}
        closeModal={()=>setShowModal(false)}
        config={modal}
      />
    </Widget>
  )
}
