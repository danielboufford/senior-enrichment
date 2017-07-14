import axios from 'axios';

const initialState = {
  students: [],
  selectedStudent: {}
}

/* ------------ Actions --------------- */

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_ONE_STUDENT = 'GET_ONE_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

/* ------------ Action Creators --------------- */

export const getAllStudents = (students) => ({type: GET_ALL_STUDENTS, students });
export const getOneStudent = (student) => ({type: GET_ONE_STUDENT, selectedStudent: student });
export const createStudent = (student) => ({type: GET_ALL_STUDENTS, student });
export const editStudent = (student) => ({type: EDIT_STUDENTS, student });
export const deleteStudent = (student) => ({type: DELETE_STUDENT, student });

/* ------------ Reducer --------------- */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return Object.assign({}, state, {students:action.students});
    case GET_ONE_STUDENT:
      return Object.assign({}, state, {selectedStudent: action.selectedStudent})
    case CREATE_STUDENT:
      return Object.assign({}, state, {students: [...students, action.student]});
    case EDIT_STUDENT:
      return Object.assign({}, state, {selectedStudent: action.student})
    case DELETE_STUDENT:
      return Object.assign({}, state, {students: students.filter(student => student.id !== action.student.id)});
    default:
      return state;
  }
}
/* ------------ Thunks --------------- */


export const getAllStudentsThunk = () => (dispatch) => {
  axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(getAllStudents(students));
    })
    .catch((e) => console.log(e));
}

export const getOneStudentThunk = (studentId) => dispatch => {
  axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      dispatch(getOneStudent(student));
    })
    .catch((e) => console.log(e));
}


export const createStudentThunk = (student) => (dispatch) => {
  axios.post('/api/students', student)
    .then(res => res.data)
    .then(newStudent => {
      dispatch(createStudent(newStudent));
    })
    .catch((e) => console.log(e));
}


export const editStudentThunk = (student) => dispatch => {
  axios.put(`/api/students/${student.id}`)
    .then(res => res.data)
    .then(student => {
      dispatch(editStudent(student));
    })
    .catch((e) => console.log(e));
}

export const deleteStudentThunk = (studentId) => dispatch => {
  axios.delete(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      dispatch(deleteStudent(student));
    })
    .catch((e) => console.log(e));
}

/*- Views: as a user I...
  * see a list of all campuses on the **Campuses** view
  * see a list of all students on the **Students** view
  * see details about a campus on the **Single Student** view, including that campus's students
  * see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
  * can create a campus
  * can edit a campus's info, including adding/removing a student to/from that campus
  * can delete a campus
  * can create a student
  * can edit a student's info, including the student that student is assigned to
  * can delete a student */
