import StudentCard from "../StudentCard/StudentCard"
import "../StudentList/StudentList.css"

export default function StudentList({ studentData }) {
  console.log("<studentlist /> rendered!")
  return (
    <div className="StudentList">
      {studentData.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  )
}
