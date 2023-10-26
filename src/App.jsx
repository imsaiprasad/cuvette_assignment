import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkillTest from './Pages/SkillTest/SkillTest';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SkillTest/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
