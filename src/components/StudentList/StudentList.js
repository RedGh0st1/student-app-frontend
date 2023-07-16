import StudentCard from "../StudentCard/StudentCard"

export default function StudentList({ studentData }) {
  console.log("<studentlist /> rendered!")
  return (
    <div className="studentlists">
      {studentData.map((student) => (
        <StudentCard student={student} />
      ))}
    </div>
  )
}
