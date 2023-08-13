import { useState } from "react"
import StudentCard from "../StudentCard/StudentCard"
import "../StudentList/StudentList.css"

export default function StudentList({ studentData }) {
  console.log(`<studentlist /> rendered!`)
  //  When I type in the input, i should see filtered results by name
  const [searchInput, setSearchInput] = useState("")
  // keep track which students will have an expanded card
  // Possible dadt types
  // - array of ids ['1', '3']
  const [expanded, setExpanded] = useState([])

  // pass this as a prop thru the child component
  //  this function will toggle the presence of the
  // the childs id in the expanded array
  const handleToggleExpanded = (id) => {
    // const newExpanded = expanded.includes(id)? expanded.filter((id) => id!== id) : [...expanded, id]
    // setExpanded(newExpanded)
    // setExpanded([...expanded, id])

    // be careful not to mutate the state
    // the id is not in the expended array, add it to the array
    if (!expanded.includes(id)) {
      // add it to copy of the expanded array
      const newExpanded = [...expanded, id]
      setExpanded(newExpanded)
    } else {
      // remove it from copy of the expanded array
      const removed = expanded.filter((currId) => currId !== id)
      setExpanded(removed)
    }
  }

  const handExpandAll = () => {
    // replace the expanded state with an array that has all ids
    // (all the ids == all the ids in studentData)
    const allIds = studentData.map((student) => student.id)
    setExpanded(allIds)
  }

  const handleCollapseAll = () => {
    setExpanded([])
  }
  // handle the input change
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
  // not the same RENDERCONTENT
  const renderContent = () => {
    let contentClassName = "StudentList__content"

    if (dataToDisplay.length === 0) {
      contentClassName += " StudentList__content--center"
      return (
        <div className={contentClassName}>No results for {searchInput}</div>
      )
    } else {
      return (
        <div className={contentClassName}>
          {dataToDisplay.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              expanded={expanded.includes(student.id)}
              onClick={() => handleToggleExpanded(student.id)}
            />
          ))}
        </div>
      )
    }
  }
  console.log(`<studentlist /> rendered! searchInput = ${searchInput}`)

  return (
    <div className="StudentList">
      <div className="Student__controls">
        <input
          value={searchInput}
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
        />
        <button onClick={handExpandAll}>Expanded All</button>
        <button onClick={handleCollapseAll}>Collapse All</button>
      </div>
      {renderContent()}
    </div>
  )
}
