import { httpHelper } from "../helpers/httpHelper"

const api = httpHelper()
const url = "http://localhost:3000/plants"

const addPlant = plant => {
    api
        .post(`${url}`, { body: plant })
        .then()
        .catch(err => console.log(err))
}

const updatePlant = ( plant, callback) => {
    api
        .put(`${url}/${plant.id}`, { body: plant })
        .then(()=> getPlants(callback))
        .catch(err => console.log(err))
}

const deletePlant = (id, callback) => {
    api
        .del(`${url}/${id}`, {})
        .then(()=> getPlants(callback))
        .catch(err => console.log(err))
}

const getPlants = (callback) => {
    api
        .get(url)
        .then(res => 
            callback(res)
        )
        .catch(err => console.log(err))
}

export {getPlants, addPlant, deletePlant, updatePlant}
