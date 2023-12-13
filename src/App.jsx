import { Routes, Route } from "react-router-dom";
import { Layout } from "../src/components/Layout/Layout";
import './App.css'
import Home from "./pages/Home/Home";
import WinningDecks from './pages/WinningDecks/WinningDecks'
import Standings from "./pages/Standings/Standings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/standings" element={<Standings />}></Route>
          <Route path="/winnerdecks" element={<WinningDecks />}></Route>
        </Route>
      </Routes>
    </>   
  )
}

export default App
