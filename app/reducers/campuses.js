import axios from 'axios';

const initialState = {
  campuses: [],
  selectedCampus: {}
}

/* ------------ Actions --------------- */

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';


/* ------------ Action Creators --------------- */

export const getAllCampuses = (campuses) => ({type: GET_ALL_CAMPUSES, campuses });
export const getOneCampus = (campus) => ({type: GET_ONE_CAMPUS, selectedCampus: campus });
export const createCampus = (campus) => ({type: GET_ALL_CAMPUSES, campus });
export const editCampus = (campus) => ({type: EDIT_CAMPUSES, campuses });
export const deleteCampus = (campus) => ({type: DELETE_CAMPUS, campus });

/* ------------ Reducer --------------- */

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses});
    case GET_ONE_CAMPUS:
      return Object.assign({}, state, {selectedCampus: action.selectedCampus});
    case CREATE_CAMPUS:
      return [...campuses, action.campus];
    case EDIT_CAMPUS:
      return action.campus;
    case DELETE_CAMPUS:
      return campuses.filter(campus.id !== campus.id);
    default:
      return state;
  }
}

/* ------------ Thunks --------------- */

export const getAllCampusesThunk = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      dispatch(getAllCampuses(campuses));
    });
}

export const getOneCampusThunk = campusId => dispatch => {
  console.log("running")
  axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      console.log(campus)
      dispatch(getOneCampus(campus));
    });
}


/*- Views: as a user I...
  * see a list of all campuses on the **Campuses** view
  * see a list of all students on the **Students** view
  * see details about a campus on the **Single Campus** view, including that campus's students
  * see details about a student on the **Single Student** view, including that student's campus

- Actions: as a user I...
  * can create a campus
  * can edit a campus's info, including adding/removing a student to/from that campus
  * can delete a campus
  * can create a student
  * can edit a student's info, including the campus that student is assigned to
  * can delete a student */
