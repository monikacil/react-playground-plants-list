import { Routes, Route} from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from './pages/Home'
import PlantsCollection from './pages/PlantsCollection'
import SoldPlants from './pages/SoldPlants'
import PlantDetails from "./pages/PlantDetails"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="plants-collection" element={<PlantsCollection />} />
        <Route path="plants-collection/:plantId" element={<PlantDetails />} />
        <Route path="sold-plants" element={<SoldPlants />} />
      </Route>
    </Routes>
  );
}


