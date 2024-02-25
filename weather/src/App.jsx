import React from "react"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from "./pages/MainPage";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
