import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/filmes"element={<Filmes />} />
        <Route path="/series"element={<Series />} />
        <Route path="/explorar"element={<Explorar />} />
        <Route path="/sobre"element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App
