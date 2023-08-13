import { useState } from "react"
import "../StudentCard/StudentCard.css"
import { FaMinus, FaPlus } from "react-icons/fa"

export default function StudentCard({ student }) {
  const [expanded, setExpanded] = useState(false)
  const { id, company, firstName, lastName, email, pic, grades, skill } =
    student

  // Converted the grades to numbers
  // const numericGrades = grades.map((grade) => Number(grade))

  // Calculated the average
  //Add up all the grades

  // let total = 0
  // Loop through the grades
  // for (const grade of numericGrades) {
  // total += grade
  // }

  //Divide total by number of grades and assign to a var
  // const average = total / numericGrades.length

  // Rendered the average
  console.log(`<StudentCard /> rendered name=${firstName} expanded=${expanded}`)
  return (
    <div className="StudentCard" key={id}>
      <div className="StudentCard__avatar">
        <img src={pic} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="StudentCard__info">
        <h2>
          {firstName} {lastName}
        </h2>
        <ul>
          <li className="studentlist__email">Email: {email}</li>
          <li className="studentlist__company">Company: {company}</li>
          <li className="studentlist__skill">Skill: {skill}</li>
          <li className="studentlist__average">
            Average:{" "}
            {grades.reduce((acc, curr) => {
              return acc + parseInt(curr)
            }, 0) / grades.length}
            %
          </li>
        </ul>
        {expanded && (
          <div className="StudentCard__grades">
            <ul>
              {grades.map((grade, index) => (
                <li key={`${grade}-${index}`}>
                  <span>Test {index + 1}</span> <span>{grade}%</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="StudentCard__controls">
        <button
          onClick={() => {
            setExpanded(!expanded)
          }}
        >
          {expanded ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
    </div>
  )
}
