import "./App.css"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://localhost:9000")
      const data = await res.json()
      console.log(data)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <h1>Hello World!!!3</h1>
    </div>
  )
}

export default App
