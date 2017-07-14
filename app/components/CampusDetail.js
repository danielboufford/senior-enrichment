import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOneCampusThunk } from '../reducers/campuses'

class CampusDetail extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const campusId = this.props.match.params.campusId
    this.props.getOneCampusThunk(campusId);
  }

  handleSubmit(event) {

  }

  render() {
    const filteredStudents = this.props.students.filter(student => {
      return +student.campusId === +this.props.match.params.campusId;
    })
      console.log(this.props.students)
      console.log(filteredStudents)
    return (
      <div>
        <h1>Campus Detail:</h1>
        <h4>{this.props.selectedCampus.name}</h4>
        <img src={"../" + this.props.selectedCampus.image} width="300" height="300"/>
        <h2>{this.props.selectedCampus.name} Students:</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Campus name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
        {this.props.students.filter(student => {
          return +student.campusId === +this.props.match.params.campusId;
        })
        .map(student => {
          return (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.fullName}</td>
              <td>{this.props.selectedCampus.name}</td>
              <td><button type="submit" className="btn btn-danger" onSubmit={this.handleDeleteStudent}>Remove</button></td>
            </tr>
          )
        })
      }
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <label>Edit Campus Name</label><br />
          <input type="text" name="name"></input><br />
          <button type="submit" className="btn btn-warning">Edit Campus</button>
          <button type="submit" className="btn btn-danger">Remove Campus</button>
        </form>
      </div>
    )
  }
}

/*----------CONTAINER----------- */

const mapState = state => ({selectedCampus: state.campusesReducer.selectedCampus, students: state.studentsReducer.students});
const mapDispatch = dispatch => ({ getOneCampusThunk: (campusId) => dispatch(getOneCampusThunk(campusId)) });

export default connect(mapState, mapDispatch)(CampusDetail);
