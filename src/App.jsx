import { Routes, Route} from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from './pages/Home'
import PlantsList from './pages/PlantsList'
import Dashboard from './pages/Dashboard'
import PlantDetails from "./pages/PlantDetails"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="plants-list" element={<PlantsList />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="plants-list/:plantId" element={<PlantDetails />} />
      </Route>
    </Routes>
  );
}


