import { useState } from "react"
import StudentCard from "../StudentCard/StudentCard"
import "../StudentList/StudentList.css"

export default function StudentList({ studentData }) {
  //  When I type in the input, i should see filtered results by name
  const [searchInput, setSearchInput] = useState(" ")

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  // body of function - filter data here
  //  create a var to hold the filter data
  let dataToDisplay = studentData

  // if searchInput is truthy (not empty string)
  // reassign dataTo Display with the filtered data
  if (searchInput) {
    // we only reach this if the user has typed something
    dataToDisplay = studentData.filter((student) => {
      // If the stduent's full name includes the searchInput, return true
      // otherwise flase
      // case insensitive
      const { firstName, lastName } = student
      const fullName = `${firstName} ${lastName}`.toLowerCase()
      return fullName.includes(searchInput.toLowerCase())
    })
  }
  //  if dataToDisplay.length === 0, show "no results for {searchInput}" Else: renter students cards
  const renderContent = () => {
    let contentClassName = "StudentList__content"

    if (dataToDisplay.length === 0) {
      contentClassName += " StudentList__content--center"
      return (
        <div className={contentClassName}>No results for ${searchInput}</div>
      )
    } else {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )
    }
  }
  console.log(`<studentlist /> rendered! searchInput = ${searchInput}`)

  return (
    <div className="StudentList">
      <div className="StudentList__input">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
      </div>{" "}
      <br />
      <div>{renderContent()}</div>
    </div>
  )
}
