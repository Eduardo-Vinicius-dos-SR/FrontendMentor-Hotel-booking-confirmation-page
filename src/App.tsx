import { Route, Routes } from "react-router-dom"
import Aside from "./components/Aside/Aside"
import Hero from "./components/Hero/Hero"
import House from "./components/House/House"
import Town from "./components/Town/Town"
import Breakfast from "./components/Breakfast/Breakfast"
import Messages from "./components/Messages/Messages"

function App() {
  return (
    <>
      <Aside />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/stay" element={<Hero />} />
        <Route path="/house" element={<House />} />
        <Route path="/town" element={<Town />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </>
  )
}

export default App
