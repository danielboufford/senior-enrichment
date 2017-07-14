import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllStudentsThunk, createStudentThunk, deleteStudentThunk } from '../reducers/students';

class Students extends Component {
  constructor() {
    super();
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleDeleteStudent = this.handleDeleteStudent.bind(this);
  }

  handleAddStudent(event) {
    event.preventDefault();
    this.props.createStudentThunk({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        campusId: event.target.campusId.value
       })
  }

  handleDeleteStudent(event) {
    event.preventDefault();
    this.props.deleteStudentThunk()
  }

  render() {
    return (
      <div>
        <h1>Students List:</h1>
        <form onSubmit={this.handleAddStudent}>
          <label>Student First Name</label><br />
          <input type="text" name="firstName"></input><br />
          <label>Student Last Name</label><br />
          <input type="text" name="lastName"></input><br />
          <label>Student Email</label><br />
          <input type="text"name="email"></input><br />
          <label>Campus ID</label><br />
          <input type="text"name="campusId"></input><br />
          <button type="submit" className="btn btn-success">Add Student</button>
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Campus Name</th>
              <th>Expel Student</th>
            </tr>
          </thead>
          <tbody>
          {this.props.students.map(student => {
            const campus = this.props.campuses.find(campus => {
                return campus.id === student.campusId;
              });
              const studentId = student.id;
            return (
                <tr key={student.id}>
                    <td name="studentId">{student.id}</td>
                    <Link to={`/students/${student.id}`}><td>{student.fullName}</td></Link>
                    <td>{ campus.name }</td>
                    <td><form onSubmit={this.handleDeleteStudent}><button type="submit" className="btn btn-danger">Remove</button></form></td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

/*----------CONTAINER----------- */

const mapState = state => ({students: state.studentsReducer.students, campuses: state.campusesReducer.campuses});
const mapDispatch = { createStudentThunk, deleteStudentThunk };

export default connect(mapState, mapDispatch)(Students);
