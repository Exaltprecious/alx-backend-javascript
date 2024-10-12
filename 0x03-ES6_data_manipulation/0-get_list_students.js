/**
 * Retrieves a list of students.
 * @author Eneh Chinelo Peculiar <https://github.com/<xaltprecious>
 * @returns {{id: number, firstName: string, location: string}[]} An array of student objects.
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
