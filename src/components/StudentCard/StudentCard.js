export default function StudentCard({ student }) {
  const { id, company, firstName, lastName, email, pic, grades, skill } =
    student

  // Converted the grades to numbers
  // const numericGrades = grades.map((grade) => Number(grade))

  // Calculated the average
  //Add up all the grades

  //   let total = 0
  // Loop through the grades
  //   for (const grade of numericGrades) {
  // total += grade
  //   }

  //Divide total by number of grades and assign to a var
  //   const average = total / numericGrades.length

  // Rendered the average

  return (
    <div className="studentlist" key={id}>
      <img src={pic} alt={`${firstName} ${lastName}`} />
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
    </div>
  )
}
