import { useEffect, useState } from "react"
import "./App.css"
import Loading from "./components/Loading/Loading"
import StudentList from "./components/StudentList/StudentList"
import Error from "./components/Error/Error"
import Container from "./components/Container/Container"

// TODO: Get this value from .env
const API_URL = "http://localhost:9000"

function App() {
  const [studentData, setStudentData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    console.log("<App/> useEffect() fired!")
    async function fetchData() {
      try {
        setError("")
        // You can await here
        setLoading(true)
        // Show the user that we're loading
        const response = await fetch(`${API_URL}/students`)
        const json = await response.json()
        console.log("<App /> useEffect() fetched data", json)
        const { data, error } = json
        if (response.ok) {
          // handle succes'
          setStudentData(data)
          // stop showing the user the loading UI...
          setLoading(false)
        } else {
          // handle error
          setError(error)
          setLoading(false)
        }
      } catch (error) {
        console.log(`<App /> useEffect error:, ${error.message}`)
        setError(error.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const renderContent = () => {
    if (loading) {
      return <Loading />
    } else if (error) {
      return <Error error={error} />
    } else {
      return <StudentList studentData={studentData} />
    }
  }
  console.log(
    `<App /> rendered! error = ${error},  loading = ${loading},  num students = ${studentData.length}`
  )
  return (
    <div className="App">
      <h1>Student List</h1>
      <Container center={Boolean(error || loading)}>
        {renderContent()}
      </Container>
    </div>
  )
}

export default App
