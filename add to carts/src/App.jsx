import { useEffect, useState } from "react"
import Cards from "./Cards"
import { Link, Route, Routes } from "react-router-dom"
import DisplayCards from "./DisplayCards"

function App() {

  const [addToCarts, setAddToCarts] = useState(()=>{
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
})

console.log(addToCarts);


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addToCarts));
  }, [addToCarts])

  return (
    <>
      <h1>Carts <sub>{addToCarts.length}</sub></h1>
      <Link to="/displayCards">Display Cards</Link>
      <Routes>
        <Route path="/Cards" element={<Cards addToCarts={addToCarts} setAddToCarts={setAddToCarts} />} />
        <Route path="/displayCards" element={<DisplayCards setAddToCart={setAddToCarts} addToCarts={addToCarts} />} />

      </Routes>
    </>
  )
}

export default App
