import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOneStudentThunk, editStudentThunk, deleteStudentThunk } from '../reducers/students'

class StudentDetail extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getOneStudentThunk(this.props.match.params.studentId)
  }

  handleSubmit(event) {
    this.props.editStudentThunk()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Student Detail:</h1>

        <span><h4><strong>Name: </strong>{this.props.selectedStudent.fullName}</h4></span><br />
        <span><h4><strong>Email: </strong>{this.props.selectedStudent.email}</h4></span><br />
        <span><h4><strong>Campus: </strong></h4></span><br />
        <hr />
        <h2>Edit Student:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Student First Name</label><br />
          <input type="text" name="firstName"></input><br />
          <label>Student Last Name</label><br />
          <input type="text" name="lastName"></input><br />
          <label>Student Email</label><br />
          <input type="text"name="email"></input><br />
          <label>Campus</label><br />
          <input type="text"name="campus"></input><br />
          <button type="submit" className="btn btn-warning">Edit Student</button>
        </form>
      </div>
    )
  }
}

/*----------CONTAINER----------- */

const mapState = state => ({selectedStudent: state.studentsReducer.selectedStudent});
const mapDispatch ={ getOneStudentThunk, editStudentThunk, deleteStudentThunk };

export default connect(mapState, mapDispatch)(StudentDetail);
