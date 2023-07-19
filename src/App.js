import { useEffect, useState } from "react"
import "./App.css"

import StudentList from "./components/StudentList/StudentList"

// TODO: Get this value from .env
const API_URL = "http://localhost:9000"

function App() {
  const [studentData, setStudentData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("<App/> useEffect() fired!")
    async function fetchData() {
      // You can await here
      setLoading(true)
      // Show the user that we're loading
      const response = await fetch(`${API_URL}/students`)
      const json = await response.json()
      console.log("<App /> useEffect() fetched data", json)
      const { data } = json
      setStudentData(data)
      // Stop showing the user the loading UI...
      setLoading(false)
    }
    fetchData()
  }, [])

  console.log(
    `<App /> rendered! loading = ${loading},  num students = ${studentData.length}`
  )
  return (
    <div className="App">
      {/* If loading, render <loading /> else render <StudentList />*/}
      {loading ? <Loading />
      <h1>Student List</h1>
      <StudentList studentData={studentData} />
      : null}
    </div>
  )
}

export default App
