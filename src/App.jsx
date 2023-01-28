import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Level01 from "./pages/Level01"

export default function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Level01 />}>
                  </Route>
      </Routes>
    </BrowserRouter>
      
    </main>
  )
}