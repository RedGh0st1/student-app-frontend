import { useEffect, useState } from "react"
import "./App.css"

import StudentList from "./components/StudentList"

// TODO: Get this value from .env
const API_URL = "http://localhost:9000"

function App() {
  const [studentData, setStudentData] = useState([])

  useEffect(() => {
    console.log("<App/> useEffect() fired!")
    async function fetchData() {
      // You can await here
      const response = await fetch(`${API_URL}/students`)
      const json = await response.json()
      console.log("<App /> useEffect() fetched data", json)
      const { data } = json
      setStudentData(data)
    }
    fetchData()
  }, [])

  console.log("<App /> rendered!")
  return (
    <div className="App">
      <h1>Hello World!!!3</h1>
      <StudentList />
    </div>
  )
}

export default App
