import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Explorar from "./Pages/Explorar.tsx"
import Filmes from "./Pages/Filmes.tsx"
import Home from "./Pages/Home.tsx"
import Login from './Pages/Login.tsx'
import Registrar from "./Pages/Registro.tsx"
import Series from "./Pages/Series.tsx"
import Sobre from "./Pages/Sobre.tsx"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/explorar"element={<Explorar />} />
        <Route path="/filmes"element={<Filmes />} />
        <Route path="/home"element={<Home />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/series"element={<Series />} />
        <Route path="/sobre"element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App
