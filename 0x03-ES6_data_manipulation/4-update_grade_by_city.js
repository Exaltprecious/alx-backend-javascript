/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: number,
 *   firstName: string,
 *   location: string
 * }[]} students - The list of students.
 * @param {string} city - The city of students.
 * @param {{
 * studentId: number,
 *   grade: number,
 * }[]} newGrades - The new grades to be assigned to students.
 * @returns {{id: number, firstName: string, location: string, grade: string}[]} - The updated list of students with their grades.
 * @author Eneh Chinelo Peculiar <https://github.com/Exaltprecious>
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
	    .filter(student => student.location === city)
      .map(student => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades.find(grade => grade.studentId === student.id) || defaultGrade).grade,
      }));
  }
  return [];
}
