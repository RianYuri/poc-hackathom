import { Analise } from './pages/Analise';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Analise' element={<Analise/>}/>
      </Routes>
    </Router>
  )
}

export default App
