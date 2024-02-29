import React from "react"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import LogIn from "./components/LogIn";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="L" element={<LogIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
